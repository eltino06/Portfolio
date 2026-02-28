import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations';

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();

    // Validate with Zod
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = result.data;

    // ─── Check if Resend is configured ───────────────────────────
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.RESEND_TO_EMAIL ?? process.env.RESEND_FROM_EMAIL;

    if (!apiKey || apiKey === 're_your_api_key_here') {
      // In development, just log and return success
      console.log('📧 Contact form submission (Resend not configured):', {
        name,
        email,
        subject,
        message,
      });
      return NextResponse.json(
        { success: true, message: 'Message received (dev mode — email not sent)' },
        { status: 200 }
      );
    }

    // ─── Send via Resend ─────────────────────────────────────────
    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev',
      to: toEmail ?? 'you@example.com',
      reply_to: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0d1117; color: #e6edf3; border-radius: 12px;">
          <h2 style="color: #8250ff; margin-bottom: 16px;">New Portfolio Contact</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #7d8590; width: 100px;">From:</td>
              <td style="padding: 8px 0; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #7d8590;">Email:</td>
              <td style="padding: 8px 0;">
                <a href="mailto:${email}" style="color: #8250ff;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #7d8590;">Subject:</td>
              <td style="padding: 8px 0;">${subject}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #21262d; margin: 16px 0;" />
          <div style="white-space: pre-wrap; line-height: 1.6;">${message}</div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
