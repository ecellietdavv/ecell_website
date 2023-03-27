import sanityClient from '@sanity/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token: process.env.SANITY_API_TOKEN,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2022-08-06',
};

const client = sanityClient(config);
const checkRegistrationsQuery = `
    *[_type == 'es23_registrations' && email == $email][0]
`;

type Data = {
  message: string;
  error?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { name, college, email, profession, phone } = JSON.parse(req.body);

    const msg = {
      from: 'ecell@ietdavv.edu.in', // Change to your verified sender
      template_id: process.env.ES23_CONFIRMATION,
      personalizations: [
        {
          subject: `ESummit23 Registration Confirmed! 🎉`,
          to: { email: email },
          dynamic_template_data: {
            name: name,
          },
        },
      ],
    };

    try {
      const data = await client.fetch(checkRegistrationsQuery, {
        email: email,
      });

      if (data) {
        return res.status(400).json({ message: 'Already Registered' });
      }

      await client.create({
        _type: 'es23_registrations',
        email,
        name,
        college,
        phone,
        profession,
      });

      await sgMail
        .send(msg)
        .then(() => {
          console.log('Email sent');
        })
        .catch((error: any) => {
          console.error(error);
        });
    } catch (error) {
      return res.status(500).json({ message: 'Could not register!', error });
    }

    return res.status(200).json({ message: 'Registered Sucessfuly!' });
  }
}
