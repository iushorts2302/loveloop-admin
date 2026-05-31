import { q, send } from '../_lib/db.js';
export default async function handler(req, res) {
  try {
    const rows = await q(
      `SELECT check_code,title,status,note,last_checked FROM darkpattern_audits ORDER BY check_code`);
    send(res, 200, { audits: rows });
  } catch (e) { send(res, 500, { error: e.message }); }
}
