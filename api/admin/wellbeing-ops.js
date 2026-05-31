import { q, send } from '../_lib/db.js';
export default async function handler(req, res) {
  try {
    // 과몰입 코호트: 오늘 사용시간 상위 / 야간 비중 높은 사용자
    const heavy = await q(
      `SELECT w.user_id,u.handle,w.minutes_used,w.night_ratio
       FROM wellbeing_logs w JOIN users u ON u.id=w.user_id
       WHERE w.log_date=CURRENT_DATE ORDER BY w.minutes_used DESC LIMIT 20`);
    const settings = await q(`SELECT setting_key,setting_value,description FROM system_settings`);
    send(res, 200, { cohort: heavy, settings });
  } catch (e) { send(res, 500, { error: e.message }); }
}
