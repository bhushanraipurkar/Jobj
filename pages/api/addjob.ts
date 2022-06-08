// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import toast from 'react-hot-toast'

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data: jobdetail = req.body
  const mutation: jobdetail = {
    title: data.title,
    topic: data.topic,
    desc: data.desc,
    noopen: data.noopen,
    postrequired: data.postrequired,
    salary: data.salary,
    time: data.time,
    experience: data.experience,
    contact: data.contact,
    hiring: data.hiring,
    pgender: data.pgender,
    location: data.location,
    aadhar: data.aadhar,
    rphoto: data.rphoto,
    owner: data.owner,
  }

  const url = `${process.env.API_ROOT}/job435/register`

  const indicator = toast.loading('processing')
  const result = await fetch(url, {
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(mutation),
    method: 'POST',
  })

  const json = await result.json()
  const code = await result.status
  if (code == 200) {
    toast.success('successfully posted. 👍', { id: indicator })
  } else {
    toast.error('something went wrong !', { id: indicator })
  }
  toast.success('successfully posted')
  // console.log(req.body)

  res.status(200).json({ message: JSON.stringify(json) })
}
