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

type Data = {
  message: string;
  error?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { name, college, email, profession, startup, stage, phone } =
      JSON.parse(req.body);

    const msg = {
      from: 'ecell@ietdavv.edu.in', // Change to your verified sender
      template_id: process.env.SENDGRID_CONFIRMATION,
      personalizations: [
        {
          subject: `Entrepreneurship Bootcamp'23 Registration Confirmed!`,
          to: { email: email },
          dynamic_template_data: {
            name: name,
          },
        },
      ],
    };

    try {
      await client.create({
        _type: 'register',
        email,
        name,
        college,
        phone,
        profession,
        startup,
        stage,
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

    return res.status(200).json({ message: 'Message submitted!' });
  }
}
