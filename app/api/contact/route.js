import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Check if environment variables are set
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD || !process.env.ALERT_EMAIL) {
      console.error('Missing SMTP credentials or ALERT_EMAIL environment variables.');
      return NextResponse.json(
        { error: 'Server configuration error. Contact the administrator.' },
        { status: 500 }
      );
    }

    // Configure the email transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Setup email data
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`, // Send FROM the authenticated user
      to: process.env.ALERT_EMAIL, // Send TO the alert email address
      replyTo: email, // When you click reply, it goes to the sender
      subject: `New Portfolio Message from ${name}`,
      text: `
You have received a new message from your portfolio contact form.

Name: ${name}
Email: ${email}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #4F46E5;">New Portfolio Contact</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <div style="margin-top: 20px; padding: 15px; border-left: 4px solid #4F46E5; background-color: #f9fafb;">
            <p style="white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
