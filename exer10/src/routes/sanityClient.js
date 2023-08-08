import { sanityClient } from "@sanity/client";

export const writeClient = sanityClient({
    projectId: 's8ovcl9f',
    dataset: 'subjects',
    token: process.env.SANITY_AUTH_TOKEN,
    useCdn: false
  })
  
  export const readClient = sanityClient({
    projectId: 's8ovcl9f',
    dataset: 'subjects',
    useCdn: true
  })