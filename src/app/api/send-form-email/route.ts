import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, details, subject } = body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    const sendResult = await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: subject || "New Form Submission",
      // Use 'html:' for styled content
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;">
          <h2 style="color:#2563eb;margin-bottom:20px;">Request a Quote</h2>
          <table cellpadding="8" cellspacing="0" style="background:#f9fafb;width:100%;border-radius:8px;">
            <tr>
              <td style="font-weight:bold;width:120px;">Name:</td>
              <td>${name}</td>
            </tr>
            <tr>
              <td style="font-weight:bold;">Email:</td>
              <td>${email}</td>
            </tr>
            <tr>
              <td style="font-weight:bold;">Phone:</td>
              <td>${phone}</td>
            </tr>
            <tr>
              <td style="font-weight:bold;">Details:</td>
              <td>${details}</td>
            </tr>
          </table>
        </div>
      `,
    });

    console.log("Email sent successfully:", sendResult);

    return new Response(JSON.stringify({ message: "Sent" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Failed to send email:", err);

    return new Response(JSON.stringify({ error: "Failed to send email." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
