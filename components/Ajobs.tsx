import Link from 'next/link'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useSession } from 'next-auth/react'

interface Props {
  title: string
}

const Ajobs = ({ title }: Props) => {
  const { data: session } = useSession()
  const [alljobs, setalljobs] = useState<jobdetail[]>([
    {
      title: '',
      topic: '',
      desc: '',
      noopen: 0,
      postrequired: '',
      salary: 0,
      time: '',
      experience: 0,
      contact: 0,
      hiring: true,
      pgender: '',
      location: '',
      aadhar: '',
      owner: '',
      rphoto: '',
    },
  ])

  const get__alljobs = async () => {
    const resp1 = await fetch(`/job435/all`)
    const resp = await resp1.json()
    if (resp1.status == 200) {
      console.log('running')
      toast.success('updated')
    } else {
      toast.success('updated ! no record found.')
    }
    setalljobs(resp)
    console.log(resp)
  }

  useEffect(() => {
    get__alljobs()
  }, [])

  const apply = async (id: string) => {
    const resp = await fetch(`/job435/apply/${id}`, {
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      body: JSON.stringify({
        email: session?.user?.email,
      }),
      method: 'PUT',
    })
    const response = await resp.json()
    console.log(response)
    toast.success(response.message || 'applied')
  }

  return (
    <div className=" md:mx-20 lg:mx-60">
      <div className=" ">
        {alljobs
          .slice(0)
          .reverse()
          .map((i, num) => {
            return (
              <div key={num} className="mx-auto mb-5 border-2 shadow-md">
                <div className="m-4 mb-10 flex flex-row justify-between">
                  <h1 className="ml-3 mt-3 items-center text-2xl font-normal">
                    {i.title}
                  </h1>
                  <img
                    src={
                      i.rphoto ||
                      'https://media.istockphoto.com/vectors/error-icon-vector-illustration-vector-id922024224?k=6&m=922024224&s=612x612&w=0&h=LXl8Ul7bria6auAXKIjlvb6hRHkAodTqyqBeA6K7R54='
                    }
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
                      <span className="font-semibold text-black">
                        {i.postrequired}
                      </span>
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
                      <span className="font-semibold text-black">
                        {i.pgender}
                      </span>
                    </p>
                  </div>
                  <div className="my-2 ">
                    <p className="text-md font-extrabold text-gray-500">
                      Salary -{' '}
                      <span className=" text-green-700">₹ {i.salary}</span>
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
                        {i.noopen} Positions
                      </span>
                    </p>
                  </div>
                  <div className="my-2">
                    <p className="text-sm text-gray-500">
                      Shift (day) -{' '}
                      <span className="font-semibold text-black">{i.time}</span>
                    </p>
                  </div>
                  <div className="my-2 flex">
                    <p className="text-sm text-gray-500">Location - </p>

                    <p className="text-sm font-semibold text-black">
                      {i.location} ,
                    </p>
                  </div>
                  <div className="my-2">
                    <p className="text-sm text-gray-500">
                      Contact -{' '}
                      <span className="font-semibold text-black">
                        {i.contact}
                      </span>
                    </p>
                  </div>
                </div>

                {session && (
                  <div className="mx-8 mt-14 flex flex-row">
                    <div></div>
                    <div onClick={() => apply(i._id)}>
                      <p className="button-magic">Open to work</p>
                    </div>
                  </div>
                )}

                <br />
                <div className="flex justify-between p-2">
                  <div></div>
                  <div className="flex items-center gap-4">
                    <div
                      className={`h-3 w-3 rounded-full ${
                        i.hiring ? 'bg-green-600' : 'animate-ping bg-red-600'
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
