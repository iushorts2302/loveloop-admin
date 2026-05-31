import { q, send } from '../_lib/db.js';
export default async function handler(req, res) {
  try {
    const rows = await q(
      `SELECT id,target_type,target_ref,reason,status,created_at FROM reports
       ORDER BY (status='open') DESC, created_at DESC LIMIT 100`);
    send(res, 200, { reports: rows });
  } catch (e) { send(res, 500, { error: e.message }); }
}
