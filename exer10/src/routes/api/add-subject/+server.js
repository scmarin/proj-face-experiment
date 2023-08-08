import { json } from "@sveltejs/kit";
import * as db from '$lib/server/database.js';
import { createClient } from "@sanity/client";

const client = createClient({
    projectId: 's8ovcl9f',
    dataset: 'subjects',
    apiVersion: "2021-10-21",
    useCdn: false
})

export async function POST({ request }) {
    const subjectData = await request.json();
    subjectData["_type"] = "subject";

    const subject = db.getSubjectsList().find((subject) => subject.code === subjectData.code)
    
    let query = "*[_type == 'subject' && code == $code] {code}";
    let queryParams = { code: "CMSC 11" };
    return await client.fetch(query, queryParams)
        .then((res) => {
            console.log(res);
            return res.find((subject) => subject.code == "CMSC 12");
        })
        .then(async (res) => {
            if (!res) {
                await client.create(subjectData).then((res) => {
                    return json({ success: true})
                });
            } else {
                return json({ success: false})
            }
        });
    
    // if (!subject) {
    //     await db.addSubject(subjectData)
    //     return json({ success: true })
    // } else {
    //     return json({ success: false })
    // }
}