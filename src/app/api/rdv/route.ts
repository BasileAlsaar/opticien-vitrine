import { NextResponse } from "next/server";

// Mock RDV endpoint.
// To wire to Resend later:
//   import { Resend } from 'resend';
//   const resend = new Resend(process.env.RESEND_API_KEY);
//   await resend.emails.send({ from, to, subject, html });
// And add RESEND_API_KEY to .env.local + Vercel env vars.

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, motif, date, message } = body ?? {};

    if (!name || !email || !phone || !motif) {
      return NextResponse.json(
        { ok: false, error: "Champs requis manquants." },
        { status: 400 },
      );
    }

    // For now: log to server console. Replace with Resend in production.
    console.log("[RDV]", { name, email, phone, motif, date, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Requête invalide." },
      { status: 400 },
    );
  }
}
