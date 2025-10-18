// import type { NextApiRequest, NextApiResponse } from 'next';
// import nodemailer from 'nodemailer';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "POST") return res.status(405).end();

//   const { name, email, phone, details } = req.body;

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.GMAIL_USER,
//       pass: process.env.GMAIL_PASS,
//     },
//   });

//   try {
//     await transporter.sendMail({
//       from: process.env.GMAIL_USER,
//       to: process.env.GMAIL_USER, // email will go to "virtueauto7@gmail.com"
//       subject: "New Form Submission",
//       text: `
// Name: ${name}
// Email: ${email}
// Phone: ${phone}
// Details: ${details}
//       `.trim(),
//     });

//     res.status(200).json({ message: "Sent" });
//   } catch (err) {
//     res.status(500).json({ error: "Failed to send email." });
//   }
// }
