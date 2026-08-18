import { message } from 'antd';

export function sendEmailNotification(messageData) {
  if (!window.Email) {
    return;
  }

  const config = {
    SecureToken: '017304df-145b-4d42-a5db-623255b0eda6',
    To: 'vatanict.info@gmail.com',
    From: messageData.email,
    Subject: `New request from ${messageData.company || messageData.name}`,
    Body: `Name: ${messageData.name}\nPhone: ${messageData.phonenumber}\nEmail: ${messageData.email}\nCompany: ${messageData.company}\nMessage: ${messageData.message}`,
  };

  window.Email.send(config);
}

export function resetFormFields(form) {
  form.name.value = '';
  form.phonenumber.value = '';
  form.email.value = '';
  form.company.value = '';
  form.message.value = '';
}

export function showFormSuccess(t) {
  message.success({
    content: t('contact.success'),
    duration: 4,
  });
}

export function showFormError(t) {
  message.error({
    content: t('contact.error'),
    duration: 4,
  });
}
