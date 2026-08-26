import { query } from './db.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const result = await query(
      'SELECT * FROM grand_estate_applications ORDER BY submitted_at DESC'
    );
    return res.status(200).json(result.rows);
  } catch (err) {
    console.error('Fetch error:', err);
    return res.status(500).json({ error: err.message });
  }
}
