import nodemailer from "nodemailer";

const SERVICE_LABELS: Record<string, string> = {
  "web-development": "Custom Web Development",
  ecommerce: "E-commerce Websites",
  "automation-ai": "Automation & AI Agents",
  "seo-aeo-geo": "AEO, SEO & GEO",
  "digital-marketing": "Digital Marketing",
  "web-scraping": "Web Scraping",
  "django-flask": "Django & Flask Backend",
  devops: "DevOps",
  other: "Other",
};

export type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
};

function getTransporter() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    throw new Error("Email credentials are not configured");
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

export async function sendContactEmail(data: ContactFormData) {
  const to = process.env.CONTACT_TO_EMAIL || process.env.GMAIL_USER;
  const from = process.env.GMAIL_USER;

  if (!to || !from) {
    throw new Error("Email recipients are not configured");
  }

  const serviceLabel = SERVICE_LABELS[data.service] || data.service;
  const submittedAt = new Date().toLocaleString("en-OM", {
    timeZone: "Asia/Muscat",
    dateStyle: "full",
    timeStyle: "short",
  });

  const transporter = getTransporter();

  await transporter.sendMail({
    from: `"oma dev Website" <${from}>`,
    to,
    replyTo: data.email,
    subject: `New Free Quote Request — ${data.name} (${serviceLabel})`,
    text: [
      "New contact form submission from oma dev website",
      "",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "Not provided"}`,
      `Company: ${data.company || "Not provided"}`,
      `Service: ${serviceLabel}`,
      "",
      "Message:",
      data.message,
      "",
      `Submitted at: ${submittedAt}`,
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #053b70; color: white; padding: 24px; border-radius: 12px 12px 0 0;">
          <h1 style="margin: 0; font-size: 22px;">New Free Quote Request</h1>
          <p style="margin: 8px 0 0; opacity: 0.8; font-size: 14px;">oma dev website</p>
        </div>
        <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #64748b; width: 120px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${escapeHtml(data.name)}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Phone</td><td style="padding: 8px 0;">${escapeHtml(data.phone || "Not provided")}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Company</td><td style="padding: 8px 0;">${escapeHtml(data.company || "Not provided")}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Service</td><td style="padding: 8px 0; color: #00adef; font-weight: 600;">${escapeHtml(serviceLabel)}</td></tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background: white; border-radius: 8px; border-left: 4px solid #00adef;">
            <p style="margin: 0 0 8px; color: #64748b; font-size: 13px;">Message</p>
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(data.message)}</p>
          </div>
          <p style="margin: 20px 0 0; font-size: 12px; color: #94a3b8;">Submitted at: ${submittedAt}</p>
        </div>
      </div>
    `,
  });
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
