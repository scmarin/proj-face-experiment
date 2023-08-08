import * as db from "$lib/server/database.js";
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
    const { code } = await request.json()

    db.deleteSubject(code)

    return json({ success: true })
}