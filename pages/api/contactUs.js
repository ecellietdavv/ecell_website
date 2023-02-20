import sanityClient from "@sanity/client";
import { createTransport } from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token: process.env.SANITY_API_TOKEN,
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2022-08-06",
};

const transporter = createTransport(
  smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  })
);

const client = sanityClient(config)

export default async function handler(req, res) {
  if (req.method === 'POST') {

    const { name, message, email } = JSON.parse(req.body)

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'shivangmishra0824@gmail.com',
      subject: `${name} contacted at E-Cell Website.`,
      text: message,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    try {
      await client.create({
        _type: 'contact',
        email,
        name,
        message
      })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: "Could not submit message", error })
    }

    return res.status(200).json({ message: "Message submitted!" })
  }
}