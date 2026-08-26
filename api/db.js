import pkg from 'pg';
const { Pool } = pkg;

export const query = async (text, params) => {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  try {
    const result = await pool.query(text, params);
    return result;
  } finally {
    await pool.end();
  }
};
