import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();
  try {
    const data = await resend.emails.send({
      from: "KB Architecture <onboarding@resend.dev>",
      to: ["joshuabcastillejos@gmail.com"],
      subject: `📩 New Inquiry`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 40px 0;">
      
        <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 32px; border-radius: 8px;">
        
        <!-- Header -->
        <div style="border-bottom: 1px solid #e5e5e5; padding-bottom: 16px; margin-bottom: 24px;">
          <h1 style="margin: 0; font-size: 36px; font-weight: 600; letter-spacing: 1px;">
            KB Architecture
          </h1>
          <p style="margin: 4px 0 0; color: #777; font-size: 16px;">
            New Client Inquiry
          </p>
        </div>

        <!-- Info -->
        <div style="margin-bottom: 20px;">
          <p style="margin: 0; font-size: 16px;"><strong>Name</strong></p>
          <p style="margin: 4px 0 12px; font-size: 16px;">${name}</p>

          <p style="margin: 0; font-size: 16px;"><strong>Email</strong></p>
          <p style="margin: 4px 0 12px; font-size: 16px;">${email}</p>

          <p style="margin: 0; font-size: 16px;"><strong>Subject</strong></p>
          <p style="margin: 4px 0 12px; font-size: 16px;">${subject}</p>
        </div>

        <!-- Message -->
        <div style="margin-top: 24px;">
          <p style="margin: 0; font-size: 16px;"><strong>Message</strong></p>
          <div style="margin-top: 8px; padding: 16px; background: #fafafa; border-left: 3px solid #111;">
            ${message}
          </div>
        </div>

        <!-- Footer -->
        <div style="margin-top: 32px; border-top: 1px solid #e5e5e5; padding-top: 16px; font-size: 12px; color: #777;">
          This message was sent from KB Architecture.
        </div>

      </div>
    </div>
      `,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
