import { q, send } from '../_lib/db.js';
export default async function handler(req, res) {
  try {
    const rows = await q(
      `SELECT id,user_id,persona_id,rule_code,severity,excerpt,action,created_at
       FROM guardrail_logs ORDER BY created_at DESC LIMIT 100`);
    send(res, 200, { logs: rows });
  } catch (e) { send(res, 500, { error: e.message }); }
}
