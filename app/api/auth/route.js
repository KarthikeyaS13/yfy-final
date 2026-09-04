import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const body = await request.json();
    const password = body?.password;
    const adminPass = process.env.ADMIN_PASSWORD || 'yfyadmin2026';

    if (password && password === adminPass) {
      return NextResponse.json({ success: true, token: adminPass });
    }

    return NextResponse.json({ error: 'Incorrect master admin password.' }, { status: 401 });
  } catch {
    return NextResponse.json({ error: 'Authentication error.' }, { status: 500 });
  }
}
