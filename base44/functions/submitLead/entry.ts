import { createClientFromRequest } from 'npm:@base44/sdk@0.8.44';

const NOTIFY_EMAIL = 'info@blondeleeuw.nl';
const LIMITS = { naam: 100, email: 150, telefoon: 40, postcode: 20, project_type: 60, bericht: 3000 };

export default async function(req) {
  try {
    const body = await req.json();
    const clean = (v, key) => String(v ?? '').trim().slice(0, LIMITS[key]);

    const lead = {
      naam: clean(body.naam, 'naam'),
      email: clean(body.email, 'email'),
      telefoon: clean(body.telefoon, 'telefoon'),
      postcode: clean(body.postcode, 'postcode'),
      project_type: clean(body.project_type, 'project_type'),
      bericht: clean(body.bericht, 'bericht'),
      status: 'nieuw',
    };

    if (!lead.naam || !lead.email.includes('@')) {
      return Response.json({ error: 'Ongeldige invoer' }, { status: 400 });
    }

    const base44 = createClientFromRequest(req);
    await base44.asServiceRole.entities.Lead.create(lead);

    let emailSent = true;
    try {
      await base44.asServiceRole.integrations.Core.SendEmail({
        to: NOTIFY_EMAIL,
        subject: `Nieuwe aanvraag — ${lead.project_type || 'Algemeen'} — ${lead.naam}`,
        text:
          `Nieuwe aanvraag via blondeleeuw.nl\n\n` +
          `Naam: ${lead.naam}\n` +
          `E-mail: ${lead.email}\n` +
          `Telefoon: ${lead.telefoon || '-'}\n` +
          `Postcode: ${lead.postcode || '-'}\n` +
          `Type project: ${lead.project_type || '-'}\n\n` +
          `Bericht:\n${lead.bericht || '-'}\n`,
      });
    } catch {
      emailSent = false;
    }

    return Response.json({ ok: true, emailSent });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}