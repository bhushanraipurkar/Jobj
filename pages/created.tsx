import { PhoneMissedCallIcon } from '@heroicons/react/solid'
import { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Creatd: NextPage = () => {
  const { data: session } = useSession()
  const [ownjob, setOwnjob] = useState<boolean>(false)
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
  const get__alljobs = async (email: any) => {
    const resp1 = await fetch(`/job435/jobs/${email}`)
    const resp = await resp1.json()
    if (resp1.status == 200) {
      console.log('running')

      setOwnjob(true)
      toast.success('updated')
    } else {
      toast.success('updated ! no record found.')
    }
    setalljobs(resp)
    console.log(resp)
  }

  useEffect(() => {
    if (session) {
      get__alljobs(session.user?.email)
    }
  }, [session])

  if (session) {
    return (
      <div>
        <Header />
        <div className="m-8 flex flex-row gap-2">
          <p className="text-md font-medium text-black">Hello!</p>
          <p className="text-3xl text-gray-500">{session?.user?.name}</p>
        </div>
        <hr />
        <div>
          <h1 className="m-5 text-xl">Your jobs - </h1>
        </div>
        <div className="lg:mx-44">
          {ownjob ? (
            alljobs
              .slice(0)
              .reverse()
              .map((i, ele) => (
                <Job
                  title={i.title}
                  rphoto={i.rphoto}
                  desc={i.desc}
                  key={ele}
                  aadhar={i.aadhar}
                  contact={i.contact}
                  experience={i.experience}
                  hiring={i.hiring}
                  location={i.location}
                  noopen={i.noopen}
                  owner={i.owner}
                  pgender={i.pgender}
                  postrequired={i.postrequired}
                  salary={i.salary}
                  time={i.time}
                  topic={i.topic}
                  appliedby={i.appliedby}
                />
              ))
          ) : (
            <h1>not got any</h1>
          )}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )
  } else {
    return (
      <div className="relative h-screen bg-black">
        <div className="absolute left-72 mt-52 text-white">
          <div className="flex flex-row items-center gap-2">
            <p className="text-2xl font-bold">Please</p>

            <p
              onClick={() => signIn()}
              className="cursor-pointer rounded-lg bg-yellow-500 p-2 text-xl font-bold text-black transition-all duration-200 hover:p-2 hover:text-2xl active:rotate-45"
            >
              Login
            </p>
          </div>
        </div>
      </div>
    )
  }
}

const Job = (props: jobwithapplied) => {
  const [open, setOpen] = useState<boolean>(false)
  const [secondopen, setsecondopen] = useState<boolean>(false)
  console.log(props.appliedby)

  return (
    <div className="mx-auto mb-5 border-2 shadow-md">
      <div className="m-4 mb-10 flex flex-row justify-between">
        <h1 className="ml-3 mt-3 items-center text-2xl font-normal">
          {props.title}
        </h1>
        <img
          src={
            props.rphoto ||
            'https://media.istockphoto.com/vectors/error-icon-vector-illustration-vector-id922024224?k=6&m=922024224&s=612x612&w=0&h=LXl8Ul7bria6auAXKIjlvb6hRHkAodTqyqBeA6K7R54='
          }
          alt={props.title}
          className="h-16 w-16 -rotate-45 rounded-full shadow-md transition-all duration-200 hover:rotate-12"
        />
      </div>
      <div className="mx-8">
        <div className="my-12">
          <p className="text-sm text-gray-500">{props.desc}</p>
        </div>
        <div className="my-2">
          <p className="text-sm text-gray-500">
            Post required -{' '}
            <span className="font-semibold text-black">
              {props.postrequired}
            </span>
          </p>
        </div>
        <div className="my-2">
          <p className="text-sm text-gray-500">
            Experience required -{' '}
            <span className="font-semibold text-black">
              {props.experience} Years
            </span>
          </p>
        </div>
        <div className="my-2">
          <p className="text-sm text-gray-500">
            Prefered Gender -{' '}
            <span className="font-semibold text-black">{props.pgender}</span>
          </p>
        </div>
        <div className="my-2 ">
          <p className="text-md font-extrabold text-gray-500">
            Salary - <span className=" text-green-700">₹ {props.salary}</span>
          </p>
        </div>
        <div className="my-2">
          <p className="text-sm text-gray-500">
            Number of Openings -{' '}
            <span className="font-semibold text-black">
              {props.noopen} Positions
            </span>
          </p>
        </div>
        <div className="my-2">
          <p className="text-sm text-gray-500">
            Available Positions -{' '}
            <span className="font-semibold text-black">
              {props.noopen} Positions
            </span>
          </p>
        </div>
        <div className="my-2">
          <p className="text-sm text-gray-500">
            Shift (day) -{' '}
            <span className="font-semibold text-black">{props.time}</span>
          </p>
        </div>
        <div className="my-2 flex">
          <p className="text-sm text-gray-500">Location - </p>

          <p className="text-sm font-semibold text-black">{props.location} ,</p>
        </div>
        <div className="my-2">
          <p className="text-sm text-gray-500">
            Contact -{' '}
            <span className="font-semibold text-black">{props.contact}</span>
          </p>
        </div>
      </div>

      <div className="mx-8 mt-14 flex flex-row">
        <button onClick={() => setOpen(!open)} className="button-magic">
          Response
        </button>
      </div>

      <br />
      <div className="flex justify-between p-2">
        <div></div>
        <div className="flex items-center gap-4">
          <div
            className={`h-3 w-3 rounded-full ${
              props.hiring ? 'bg-green-600' : 'animate-ping bg-red-600'
            }`}
          ></div>
          <p className="right-0 text-xs text-gray-400">2 days ago.</p>
        </div>
      </div>
      {open && (
        <div className="m-4  border-2 p-4 shadow-sm">
          <p>applied by ...</p>
          {props.appliedby.map((i, num) => (
            <div className="mx-10 flex flex-row items-center gap-2 border-2 p-2 shadow-sm">
              <div>
                <img
                  className="h-12 w-12 rounded-full"
                  src={`https://th.bing.com/th/id/R.d40830f2d3e2d6889db42feae14e1976?rik=tZojAzgiFfdt%2fw&riu=http%3a%2f%2fsrnet.ca%2fwp-content%2fuploads%2f2017%2f01%2fDefault-Profile.png&ehk=p2iaRHoA85rN%2b3KMeBpgvoKZ2g%2bgt8m6QnNmyGFwcv8%3d&risl=&pid=ImgRaw&r=0`}
                  alt="sample"
                />
              </div>
              <div className="flex flex-row items-baseline gap-2">
                <p className="text-xl">{i},</p>
              </div>
              <div onClick={() => setsecondopen(!secondopen)}>
                <PhoneMissedCallIcon
                  className={`h-5 w-5 cursor-pointer hover:text-gray-500
          ${secondopen ? 'animate-pulse text-red-700' : ''}`}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Creatd
