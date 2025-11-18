import { NextResponse } from 'next/server';
import { getMockTournaments } from '../../../lib/mockDb';

export async function GET() {
  const items = getMockTournaments();
  return NextResponse.json({ data: items });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  return NextResponse.json({ ok: true, created: body });
}
