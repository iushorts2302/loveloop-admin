import { q, send } from '../_lib/db.js';
export default async function handler(req, res) {
  try {
    const [users] = await q(`SELECT COUNT(*) c FROM users`);
    const [active] = await q(`SELECT COUNT(*) c FROM users WHERE status='active'`);
    const [guards] = await q(`SELECT COUNT(*) c FROM guardrail_logs WHERE DATE(created_at)=CURRENT_DATE`);
    const [openRep] = await q(`SELECT COUNT(*) c FROM reports WHERE status='open'`);
    const [revenue] = await q(`SELECT COALESCE(SUM(amount_krw),0) s FROM purchases WHERE status='completed' AND DATE(created_at)=CURRENT_DATE`);
    const [audit] = await q(`SELECT SUM(status='pass') p, COUNT(*) t FROM darkpattern_audits`);
    send(res, 200, { total_users:users.c, active_users:active.c, guard_today:guards.c,
      open_reports:openRep.c, revenue_today:revenue.s, audit_pass:audit.p, audit_total:audit.t });
  } catch (e) { send(res, 500, { error: e.message }); }
}
