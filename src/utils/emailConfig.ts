// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create a free account
// 3. Create an email service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your Service ID, Template ID, and Public Key
// 6. Replace the values below with your actual EmailJS credentials

export const emailConfig = {
  serviceId: 'service_lifeserve', // Replace with your EmailJS Service ID
  templateId: 'template_contact', // Replace with your EmailJS Template ID
  publicKey: 'your_public_key', // Replace with your EmailJS Public Key
};

// Email template variables that will be available in your EmailJS template:
// {{from_name}} - Contact person's name
// {{from_email}} - Contact person's email
// {{phone}} - Contact person's phone number
// {{subject}} - Selected subject
// {{message}} - Contact message
// {{to_email}} - Your receiving email address

// Example EmailJS template:
/*
Subject: New Contact Form Submission - {{subject}}

Hello,

You have received a new contact form submission from your LifeServe Solutions website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}

Please respond to this inquiry as soon as possible.

Best regards,
LifeServe Solutions Website
*/