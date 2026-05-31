import { q, send } from '../_lib/db.js';
export default async function handler(req, res) {
  try {
    const rows = await q(
      `SELECT id,handle,display_name,locale,status,daily_spend_cap,created_at
       FROM users ORDER BY created_at DESC LIMIT 100`);
    const admins = await q(`SELECT email,display_name,role,last_active FROM admin_users ORDER BY role`);
    send(res, 200, { users: rows, admins });
  } catch (e) { send(res, 500, { error: e.message }); }
}
