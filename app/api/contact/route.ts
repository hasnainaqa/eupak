import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.AUTH_SENDGRID_KEY as string);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  const msg = {
    to: process.env.DEFAULT_TO_EMAIL as string,
    from: process.env.DEFAULT_FROM_EMAIL as string,
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `
      <strong>New Contact Form Submission</strong>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    console.log("Email sent successfully to:", msg.to);
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error: any) {
    console.error("Error sending email:", error.response?.body || error);
    return NextResponse.json({ error: "Failed to send email", details: error.message }, { status: 500 });
  }
}
