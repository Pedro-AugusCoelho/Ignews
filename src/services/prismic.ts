import * as prismic from '@prismicio/client';
import { enableAutoPreviews } from '@prismicio/next';

export const endpoint = process.env.PRISMIC_ENDPOINT;
export const repositoryName = 'ignews1903';

export function createClient(req?:unknown) {
  const client = prismic.createClient(endpoint, {
    accessToken:process.env.PRISMIC_ACCESS_TOKEN,
  })

  enableAutoPreviews({
    client,
    req: req,
  })

  return client
}

