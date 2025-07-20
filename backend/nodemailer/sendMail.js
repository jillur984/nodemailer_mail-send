import nodemailer from "nodemailer";
import { generateMailContent } from "./generateMailContent.js";
export async function sendMail(email) {
  console.log("Sending Email");
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      service: "gmail",
      auth: {
        user: process.env.GMAIL_EMAIL_ADDRESS,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const options = {
      from:process.env.GMAIL_EMAIL_ADDRESS,
      to: email,
      subject: "Greetings Mail From Jillur",
      html: generateMailContent(),
    };

    const info = await transporter.sendMail(options);
    return info;
  } catch (error) {
    console.log("Sending mail Failed", error);
  }
}
