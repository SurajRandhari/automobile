// pages/api/send-contact.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { name, email, phone, part } = req.body;
  // SETUP SMTP
  const transporter = nodemailer.createTransport({
    host: "smtp.yourprovider.com", // e.g. smtp.gmail.com
    port: 587,
    auth: {
      user: "info@connectglobalauto.site",
      pass: "YOUR_PASSWORD",
    },
  });

  await transporter.sendMail({
    from: '"Website Contact" <info@connectglobalauto.site>',
    to: "info@connectglobalauto.site",
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nParts: ${part}`,
  });

  res.status(200).json({ success: true });
}
