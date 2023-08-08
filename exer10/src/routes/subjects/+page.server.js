import * as db from "$lib/server/database.js"
import { createClient } from '@sanity/client';
import { error } from "@sveltejs/kit";

const client = createClient({
    projectId: 's8ovcl9f',
    dataset: 'subjects',
    apiVersion: "2021-10-21",
    useCdn: false
})

export async function load() {
    let sanityData = await client.fetch("*[_type == 'subject']{code}")
    return {
        greeting: db.getGreeting(),
        subjectsList: sanityData
    }
}