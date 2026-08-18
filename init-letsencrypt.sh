#!/bin/bash
# Initial Let's Encrypt certificate issuance for vatan-ict.tj
# Run this ONCE on the server, after DNS has propagated to your IP.
#
# Usage:  sudo bash init-letsencrypt.sh you@example.com

set -e

EMAIL="${1:-admin@vatanict.tj}"
DOMAIN="vatanict.tj"
WWW_DOMAIN="www.vatanict.tj"
PROJECT_NAME="vatanict"

echo "==> Using email: $EMAIL"
echo "==> Domains: $DOMAIN, $WWW_DOMAIN"

# Sanity check: DNS must resolve to this server
EXPECTED_IP=$(curl -s http://checkip.amazonaws.com/ || echo "")
RESOLVED_IP=$(dig +short "$DOMAIN" | tail -n1)
echo "==> Server public IP: $EXPECTED_IP"
echo "==> $DOMAIN resolves to: $RESOLVED_IP"
if [ -n "$EXPECTED_IP" ] && [ "$EXPECTED_IP" != "$RESOLVED_IP" ]; then
  echo "!!! WARNING: $DOMAIN does not resolve to this server yet."
  echo "!!! Let's Encrypt will fail. Wait for DNS to propagate, then re-run."
  exit 1
fi

# 1. Ensure named volumes exist
docker volume create ${PROJECT_NAME}_certbot_certs >/dev/null
docker volume create ${PROJECT_NAME}_certbot_www >/dev/null

# 2. Make sure the HTTP stack is up (serves ACME challenge on port 80)
docker compose -f docker-compose.http.yml -p ${PROJECT_NAME} up -d --build

echo "==> Waiting for HTTP server..."
sleep 5

# 3. Request the certificate
docker run --rm \
  -v ${PROJECT_NAME}_certbot_certs:/etc/letsencrypt \
  -v ${PROJECT_NAME}_certbot_www:/var/www/certbot \
  certbot/certbot certonly --webroot \
    -w /var/www/certbot \
    --email "$EMAIL" \
    --agree-tos --no-eff-email \
    -d "$DOMAIN" -d "$WWW_DOMAIN"

# 4. Tear down the HTTP-only stack, bring up the full HTTPS stack
docker compose -f docker-compose.http.yml -p ${PROJECT_NAME} down
docker compose -p ${PROJECT_NAME} up -d --build

echo ""
echo "==> Done. Try: https://$DOMAIN"
