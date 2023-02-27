import sanityClient from '@sanity/client';
import type { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token: process.env.SANITY_API_TOKEN,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2022-08-06',
};

const client = sanityClient(config);

type Data = {
  message: string;
  error?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { email } = JSON.parse(req.body);
    try {
      await client.create({
        _type: 'newsletters',
        email,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Error', error });
    }

    return res.status(200).json({ message: 'Added to Newsletters!' });
  }
}
