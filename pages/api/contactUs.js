import sanityClient from "@sanity/client";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token: process.env.SANITY_API_TOKEN,
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2022-08-06",
};

const client = sanityClient(config)

export default async function handler(req, res) {
  if (req.method === 'POST') {

    const { name, message, email } = JSON.parse(req.body)
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