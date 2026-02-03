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

    // Check for required environment variables
    const requiredEnvVars = [
      "SMTP_HOST",
      "SMTP_PORT",
      "SMTP_USER",
      "SMTP_PASSWORD",
      "SMTP_FROM",
      "SMTP_TO",
    ];
    const missingEnvVars = requiredEnvVars.filter((key) => !process.env[key]);

    if (missingEnvVars.length > 0) {
      console.error(
        "Missing required environment variables:",
        missingEnvVars.join(", "),
      );
      return Response.json(
        {
          success: false,
          message: "Server configuration error. Please contact support.",
        },
        { status: 500 },
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: parseInt(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
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

    // Debug logging (Remove in final production if desired, safe as password is not logged)
    console.log("Attempting to send email with config:", {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      secure: parseInt(process.env.SMTP_PORT) === 465,
    });

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
        message:
          "Failed to send email. " +
          (error.message || "Please try again later."),
      },
      { status: 500 },
    );
  }
}
