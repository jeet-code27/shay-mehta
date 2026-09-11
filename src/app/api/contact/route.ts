import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, message, source = "Contact Form" } = body

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required" },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error("RESEND_API_KEY is missing from environment variables")
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      )
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || "bizboxstory1@gmail.com"
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Shay Mehta Portfolio <onboarding@resend.dev>"

    const isGuideRequest = source.toLowerCase().includes("guide")
    const subject = isGuideRequest
      ? `📘 New Claude Guide Request from ${name || email}`
      : `🚀 New Contact Inquiry from ${name || email}`

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 2px solid #1E293B; border-radius: 12px; background-color: #FAFAF9; color: #1E293B;">
        <div style="background-color: #059669; color: white; padding: 12px 18px; border-radius: 8px; font-weight: bold; font-size: 16px; margin-bottom: 20px;">
          ${isGuideRequest ? "📘 Claude Guide Download Lead" : "💼 New Portfolio Contact Inquiry"}
        </div>
        
        <p style="font-size: 15px; color: #475569; margin-bottom: 20px;">
          You received a new submission from your website portfolio (<strong>${source}</strong>):
        </p>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E2E8F0; font-weight: bold; width: 140px; color: #64748B;">Name:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E2E8F0; font-weight: 600; color: #0F172A;">${name || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E2E8F0; font-weight: bold; color: #64748B;">Email:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E2E8F0; font-weight: 600; color: #059669;">
              <a href="mailto:${email}" style="color: #059669; text-decoration: none;">${email}</a>
            </td>
          </tr>
          ${company ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E2E8F0; font-weight: bold; color: #64748B;">Company:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E2E8F0; color: #0F172A;">${company}</td>
          </tr>` : ""}
          ${message ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E2E8F0; font-weight: bold; vertical-align: top; color: #64748B;">Message:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E2E8F0; color: #0F172A; white-space: pre-wrap; line-height: 1.5;">${message}</td>
          </tr>` : ""}
        </table>

        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #CBD5E1; font-size: 12px; color: #94A3B8; text-align: center;">
          Sent directly from Shay Mehta Portfolio • Powered by Resend
        </div>
      </div>
    `

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: subject,
        html: htmlContent,
      }),
    })

    const data = await resendResponse.json()

    if (!resendResponse.ok) {
      console.error("Resend API error:", data)
      return NextResponse.json(
        { error: data.message || "Failed to send email via Resend" },
        { status: resendResponse.status }
      )
    }

    return NextResponse.json({ success: true, id: data.id })
  } catch (error: unknown) {
    console.error("Contact API route error:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal Server Error" },
      { status: 500 }
    )
  }
}
