import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  console.error("SENDGRID_API_KEY environment variable is not set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY || '');

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    await mailService.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text,
      html: params.html,
    } as any); // Type assertion to fix TypeScript error
    console.log('Email sent successfully');
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

export function createContactNotificationEmail(contactData: {
  name: string;
  email: string;
  message: string;
}): EmailParams {
  const { name, email, message } = contactData;
  
  // Your receiving email
  const to = "craig.saltzer@gmail.com"; 
  
  // The email will appear to come from your site
  const from = "portfolio@craigsaltzer.com"; 
  
  const subject = `New Contact Form Submission from ${name}`;
  
  const text = `
    You have received a new message from your portfolio website contact form:
    
    Name: ${name}
    Email: ${email}
    
    Message:
    ${message}
    
    ---
    This email was sent from your portfolio website contact form.
  `;
  
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0984E3;">New Portfolio Contact Form Submission</h2>
      <p>You have received a new message from your portfolio website contact form:</p>
      
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        
        <div style="margin-top: 15px;">
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-line;">${message}</p>
        </div>
      </div>
      
      <p style="color: #777; font-size: 12px; margin-top: 30px; border-top: 1px solid #eee; padding-top: 10px;">
        This email was sent from your portfolio website contact form.
      </p>
    </div>
  `;
  
  return { to, from, subject, text, html };
}