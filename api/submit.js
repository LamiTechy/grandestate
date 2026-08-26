import { query } from './db.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const p = req.body;
    await query(
      `INSERT INTO grand_estate_applications (
        first_name, last_name, phone, email, app_date, moving_date,
        occupation, occupants, has_vehicle, has_pets, been_evicted,
        addr_street1, addr_street2, addr_city, addr_state, addr_zip,
        payment_methods, signature_data, submitted_at
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19)`,
      [
        p.first_name, p.last_name, p.phone, p.email, p.app_date, p.moving_date,
        p.occupation, p.occupants, p.has_vehicle, p.has_pets, p.been_evicted,
        p.addr_street1, p.addr_street2, p.addr_city, p.addr_state, p.addr_zip,
        p.payment_methods, p.signature_data, p.submitted_at
      ]
    );

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Submit error:', err);
    return res.status(500).json({ error: err.message });
  }
}
