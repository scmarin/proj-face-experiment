import { subjectsList } from '$lib/server/database.js';
import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 's8ovcl9f',
    dataset: 'subjects',
    apiVersion: "2021-10-21",
    useCdn: false
})

export async function load({ params }) {
    // let subject = subjectsList.find((subject) => subject.code === params.subject_code)
    console.log(`${params.subject_code}`)
    const query = `*[
        _type == "subject" &&
        code == $code
        ][0]{
            code, desc, units, sem_offered, title
        }
    `;
    const queryParams = { code: params.subject_code}
    let subject = await client.fetch(query, queryParams)
    let subjectTest = await client.fetch("*[_type == 'subject']")
        console.log(subjectTest)
    return {
        subject
    }
}