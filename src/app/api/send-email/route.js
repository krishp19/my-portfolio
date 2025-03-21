import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Simple email validation
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export async function POST(request) {
  try {
    // Parse the form data from the request
    const { name, email, subject, message } = await request.json();

    // Basic input validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    // Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
      throw new Error('Email configuration is missing in environment variables');
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Define the email options
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Shows user’s name, sent from your Gmail
      to: process.env.EMAIL_TO, // Your email to receive the message
      replyTo: email, // User’s email for easy replying
      subject: `${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
      html: `
       <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; color: #333;">
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #1a73e8; margin-top: 0; border-bottom: 2px solid #1a73e8; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            <table style="width: 100%; border-spacing: 0;">
              <tr>
                <td style="padding: 10px 0; font-weight: bold; width: 120px;">Name:</td>
                <td style="padding: 10px 0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; background-color: #f1f3f4;">Email:</td>
                <td style="padding: 10px 0; background-color: #f1f3f4;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold;">Subject:</td>
                <td style="padding: 10px 0;">${subject}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; vertical-align: top; background-color: #f1f3f4;">Message:</td>
                <td style="padding: 10px 0; background-color: #f1f3f4; white-space: pre-wrap;">${message}</td>
              </tr>
            </table>
            <div style="margin-top: 20px; font-size: 12px; color: #666; text-align: center;">
              This email was sent from your website's contact form
            </div>
          </div>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error.message);
    const errorMessage =
      error.message.includes('configuration')
        ? 'Server email configuration error'
        : 'Failed to send email. Please try again later.';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}