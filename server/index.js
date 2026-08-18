const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { randomUUID } = require('crypto');

const app = express();
const DATA_DIR = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'submissions.json');
const PORT = process.env.PORT || 3001;
const VALID_TYPES = ['contact', 'order', 'apply'];

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
const ADMIN_SECRET = process.env.ADMIN_SECRET || 'vatan-ict-change-this-secret';
const TOKEN_TTL_MS = 24 * 60 * 60 * 1000;

app.use(cors());
app.use(express.json({ limit: '1mb' }));

function readSubmissions() {
  if (!fs.existsSync(DATA_FILE)) {
    return [];
  }

  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  } catch {
    return [];
  }
}

function writeSubmissions(submissions) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(submissions, null, 2));
}

function safeEqual(a, b) {
  const bufA = Buffer.from(String(a));
  const bufB = Buffer.from(String(b));
  if (bufA.length !== bufB.length) {
    return false;
  }
  return crypto.timingSafeEqual(bufA, bufB);
}

function createToken(username) {
  const payload = Buffer.from(
    JSON.stringify({ username, exp: Date.now() + TOKEN_TTL_MS })
  ).toString('base64url');
  const signature = crypto
    .createHmac('sha256', ADMIN_SECRET)
    .update(payload)
    .digest('base64url');
  return `${payload}.${signature}`;
}

function verifyToken(token) {
  if (!token) {
    return null;
  }

  const [payload, signature] = token.split('.');
  if (!payload || !signature) {
    return null;
  }

  const expected = crypto
    .createHmac('sha256', ADMIN_SECRET)
    .update(payload)
    .digest('base64url');

  if (!safeEqual(signature, expected)) {
    return null;
  }

  try {
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString());
    if (!data.exp || data.exp < Date.now()) {
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

function requireAuth(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  const session = verifyToken(token);

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  req.admin = session;
  return next();
}

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body || {};

  if (!safeEqual(username, ADMIN_USERNAME) || !safeEqual(password, ADMIN_PASSWORD)) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  return res.json({
    token: createToken(username),
    username,
  });
});

app.get('/api/auth/verify', requireAuth, (req, res) => {
  res.json({ ok: true, username: req.admin.username });
});

app.get('/api/submissions', requireAuth, (req, res) => {
  const { type } = req.query;
  let submissions = readSubmissions();

  if (type) {
    if (!VALID_TYPES.includes(type)) {
      return res.status(400).json({ error: 'Invalid submission type' });
    }
    submissions = submissions.filter((item) => item.type === type);
  }

  res.json(submissions);
});

app.post('/api/submissions', (req, res) => {
  const { type, name, phonenumber, email, company, message } = req.body;

  if (!VALID_TYPES.includes(type)) {
    return res.status(400).json({ error: 'Invalid submission type' });
  }

  if (!name?.trim() || !email?.trim()) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const submission = {
    id: randomUUID(),
    type,
    name: name.trim(),
    phonenumber: phonenumber?.trim() || '',
    email: email.trim(),
    company: company?.trim() || '',
    message: message?.trim() || '',
    createdAt: new Date().toISOString(),
  };

  const submissions = readSubmissions();
  submissions.unshift(submission);
  writeSubmissions(submissions);

  res.status(201).json(submission);
});

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`);
});
