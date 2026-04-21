import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactFormBody = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  company?: string;
  startedAt?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactFormBody;

    const company = body.company?.trim();
    const startedAt = Number(body.startedAt);

    if (company) {
        return NextResponse.json({ success: true });
    }

    if (!startedAt || Date.now() - startedAt < 3000) {
        return NextResponse.json({ success: true });
    }

    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim();
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "AK Valeting <enquiries@akmobilevaleting.co.uk>",
      to: [process.env.CONTACT_EMAIL as string],
      replyTo: email,
      subject: `New website enquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New AK Valeting enquiry</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>

          <hr />

          <p><strong>How can we help:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}