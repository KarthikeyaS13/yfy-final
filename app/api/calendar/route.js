import { NextResponse } from 'next/server';
import { generateComplianceCalendarIcs, generateDemoIcs } from '@/lib/calendar';
import { getComplianceEvents } from '@/lib/db';
import fs from 'fs';
import path from 'path';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || 'statutory';

    if (type === 'demo') {
      const leadName = searchParams.get('leadName') || searchParams.get('name') || 'Prospect';
      const company = searchParams.get('company') || 'Enterprise';
      const module = searchParams.get('module') || 'Platform Core';
      const leadUid = searchParams.get('leadUid') || searchParams.get('uid') || 'demo';

      const ics = generateDemoIcs({ leadName, company, module, leadUid });

      return new NextResponse(ics, {
        headers: {
          'Content-Type': 'text/calendar; charset=utf-8',
          'Content-Disposition': `attachment; filename="yfy-walkthrough-${module.toLowerCase().replace(/\s+/g, '-')}.ics"`,
        },
      });
    }

    // Default: Statutory Compliance Deadlines Calendar (.ics)
    let events = getComplianceEvents();
    if (events.length === 0) {
      // Fallback to compliance.json if DB is empty
      const jsonPath = path.join(process.cwd(), 'data', 'compliance.json');
      if (fs.existsSync(jsonPath)) {
        const raw = fs.readFileSync(jsonPath, 'utf8');
        const jsonEvents = JSON.parse(raw);
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();

        events = jsonEvents.map(e => {
          const due = new Date(currentYear, currentMonth, e.dueDateDay || 15);
          return {
            id: e.id,
            title: e.title,
            act_name: e.type,
            state: e.state,
            due_date: due.toISOString(),
            description: e.description,
          };
        });
      }
    }

    const ics = generateComplianceCalendarIcs(events);

    return new NextResponse(ics, {
      headers: {
        'Content-Type': 'text/calendar; charset=utf-8',
        'Content-Disposition': 'attachment; filename="yfy-indian-statutory-calendar.ics"',
      },
    });
  } catch (error) {
    console.error('[API /api/calendar ERROR]', error);
    return NextResponse.json({ error: 'Failed to generate calendar file.' }, { status: 500 });
  }
}
