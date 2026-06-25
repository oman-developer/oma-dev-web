import { NextResponse } from "next/server";
import { sendContactEmail, type ContactFormData } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const data: ContactFormData = {
      name: String(body.name || "").trim(),
      email: String(body.email || "").trim(),
      phone: body.phone ? String(body.phone).trim() : undefined,
      company: body.company ? String(body.company).trim() : undefined,
      service: String(body.service || "").trim(),
      message: String(body.message || "").trim(),
    };

    if (!data.name || !data.email || !data.service || !data.message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    await sendContactEmail(data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
