import { q, send } from '../_lib/db.js';
export default async function handler(req, res) {
  try {
    const rows = await q(
      `SELECT pu.id,pu.user_id,u.handle,s.name item,pu.amount_krw,pu.status,pu.created_at
       FROM purchases pu JOIN users u ON u.id=pu.user_id JOIN store_items s ON s.id=pu.store_item_id
       ORDER BY pu.created_at DESC LIMIT 100`);
    send(res, 200, { purchases: rows });
  } catch (e) { send(res, 500, { error: e.message }); }
}
