import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Props {
  title: string
}

const Ajobs = ({ title }: Props) => {
  const [jobs, setJobs] = useState<Data[]>([])

  //   title: string
  //   desc: string
  //   experience: number
  //   noopen: number
  //   location: string[]
  //   availabel: boolean
  //   hired: number
  //   image: string
  //   type: string

  useEffect(() => {
    const getAllJobs = async () => {
      const resp = await fetch('/api/jobs')
        .then((res) => res.json())
        .catch((e) => {
          console.log(e)
        })
      setJobs(resp)
    }
    getAllJobs()
  }, [title])

  console.log(jobs)

  return (
    <div className=" md:mx-20 lg:mx-60">
      <div className=" ">
        {jobs.map((i, num) => {
          return (
            <div key={num} className="mx-auto mb-5 border-2 shadow-md">
              <div className="m-4 mb-10 flex flex-row justify-between">
                <h1 className="ml-3 mt-3 items-center text-2xl font-normal">
                  {i.title}
                </h1>
                <img
                  src={i.image}
                  alt={i.title}
                  className="h-16 w-16 -rotate-45 rounded-full shadow-md transition-all duration-200 hover:rotate-12"
                />
              </div>
              <div className="mx-8">
                <div className="my-12">
                  <p className="text-sm text-gray-500">{i.desc}</p>
                </div>
                <div className="my-2">
                  <p className="text-sm text-gray-500">
                    Post required -{' '}
                    <span className="font-semibold text-black">{i.type}</span>
                  </p>
                </div>
                <div className="my-2">
                  <p className="text-sm text-gray-500">
                    Experience required -{' '}
                    <span className="font-semibold text-black">
                      {i.experience} Years
                    </span>
                  </p>
                </div>
                <div className="my-2">
                  <p className="text-sm text-gray-500">
                    Prefered Gender -{' '}
                    <span className="font-semibold text-black">{i.pg}</span>
                  </p>
                </div>
                <div className="my-2">
                  <p className="text-sm text-gray-500">
                    Number of Openings -{' '}
                    <span className="font-semibold text-black">
                      {i.noopen} Positions
                    </span>
                  </p>
                </div>
                <div className="my-2">
                  <p className="text-sm text-gray-500">
                    Available Positions -{' '}
                    <span className="font-semibold text-black">
                      {i.noopen - i.hired} Positions
                    </span>
                  </p>
                </div>
                <div className="my-2">
                  <p className="text-sm text-gray-500">
                    Shift (day) -{' '}
                    <span className="font-semibold text-black">{i.timing}</span>
                  </p>
                </div>
                <div className="my-2 flex">
                  <p className="text-sm text-gray-500">Location - </p>
                  {i.location.map((i, num) => {
                    return (
                      <p key={num} className="text-sm font-semibold text-black">
                        {i} ,
                      </p>
                    )
                  })}
                </div>
              </div>

              <div className="mx-8 mt-14 flex flex-row">
                <div></div>
                <Link href={`/apply/${i.title}/${i.type}/${i.location}`}>
                  <p className="button-magic">Open to work</p>
                </Link>
              </div>

              <br />
              <div className="flex justify-between p-2">
                <div></div>
                <div className="flex items-center gap-4">
                  <div
                    className={`h-3 w-3 rounded-full ${
                      i.availabel ? 'bg-green-600' : 'animate-ping bg-red-600'
                    }`}
                  ></div>
                  <p className="right-0 text-xs text-gray-400">2 days ago.</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <br />
      <br />
      <br />
    </div>
  )
}

export default Ajobs
