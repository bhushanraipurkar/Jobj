// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data: userde = req.body
  const mutation = {
    name: data.name,
    email: data.email,
    phone: data.phone,
  }

  const result = await fetch(`${process.env.API_ROOT}/user435/register`, {
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(mutation),
    method: 'POST',
  })

  const json = await result.json()
  res.status(200).json({ message: JSON.stringify(json) })
  // res.status(200).json({ message: 'ok' })
}
