import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, phone, service, message } = await request.json();

    // Basic validation
    if (!name || !email || (!message && !service)) {
      return Response.json(
        { success: false, message: "Required fields are missing." },
        { status: 400 },
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Service:</strong> ${service || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No message provided"}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return Response.json(
      {
        success: true,
        message: "Thank you for your message. We will get back to you soon!",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return Response.json(
      {
        success: false,
        message: "Failed to send email. Please try again later.",
      },
      { status: 500 },
    );
  }
}
