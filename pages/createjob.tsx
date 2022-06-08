import { NextPage } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { signIn, signOut, useSession } from 'next-auth/react'
import { fetchuser } from '../utils/fetchuserdetail'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'

const CreateJob: NextPage = (): any => {
  const router = useRouter()
  const { data: session } = useSession()
  const [ready, setReady] = useState<boolean>(false)
  const [job, setJob] = useState<jobdetail>({
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
  })

  const get_details = async (email: any) => {
    const indicator = toast.loading('please wait...')
    const detail = await fetchuser(email)
    console.log(detail)
    setJob({
      title: '',
      topic: 'Hospital',
      desc: '',
      noopen: 0,
      postrequired: '',
      salary: 0,
      time: 'full',
      experience: 0,
      contact: 0,
      hiring: true,
      pgender: '',
      location: '',
      aadhar: '',
      rphoto: '',
      owner: detail._id,
    })
    setReady(true)
    toast.success('ready to go ->', { id: indicator })
    return detail
  }

  useEffect(() => {
    if (session) {
      const resp = get_details(session.user?.email)
    }
  }, [session])

  const submit = async () => {
    if (
      !job.title ||
      !job.topic ||
      !job.desc ||
      !job.noopen ||
      !job.postrequired ||
      !job.salary ||
      !job.time ||
      !job.experience ||
      !job.contact ||
      !job.hiring ||
      !job.owner ||
      !job.pgender ||
      !job.location ||
      !job.aadhar
    ) {
      toast.error('please fill in all fields.')
    } else {
      const result = await fetch('/api/addjob', {
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }),
        body: JSON.stringify({
          title: job.title,
          topic: job.topic,
          desc: job.desc,
          noopen: job.noopen,
          postrequired: job.postrequired,
          salary: job.salary,
          time: job.time,
          experience: job.experience,
          contact: job.contact,
          hiring: job.hiring,
          pgender: job.pgender,
          location: job.location,
          aadhar: job.aadhar,
          rphoto: job.rphoto,
          owner: job.owner,
        }),
        method: 'POST',
      })
      toast.success('successfull.')
      router.push('/created')
    }
  }

  const change = (e: any) => {
    e.preventDefault()
    setJob((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  if (session) {
    return (
      <div>
        <Header />
        <h1 className="m-4 text-3xl">Create Job</h1>
        <div className=" m-8 flex flex-col border shadow-md xl:mx-28">
          <div className=" m-4">
            <div className="flex flex-row justify-between">
              <input
                className="cinput text-2xl"
                value={job.title}
                onChange={change}
                type="text"
                name="title"
                id="title"
                placeholder="name"
              />
              <input
                className="m-3 bg-gray-100 p-2 "
                value={job.rphoto}
                onChange={change}
                type="text"
                name="rphoto"
                id="photo"
                placeholder="photo link"
              />
            </div>
            <div>
              <textarea
                className="cinput"
                value={job.desc}
                onChange={change}
                name="desc"
                id="desc"
                cols={80}
                rows={6}
                placeholder="Brief description about the shop and job..."
              ></textarea>
            </div>
            <div>
              <div>
                <label htmlFor="topic">Choose type:</label>

                <select
                  className="cinput"
                  value={job.topic}
                  onChange={change}
                  name="topic"
                  id="topic"
                >
                  <option value="Hospital">Hospital</option>
                  <option value="General store">General store</option>
                  <option value="Restaurent jobs">Restaurent jobs</option>
                  <option value="Labour job">Labour job</option>
                  <option value="Shopping mall">Shopping mall</option>
                  <option value="Hotel job">Hotel job</option>
                  <option value="Dance tuitor">Dance tuitor</option>
                  <option value="tour and travels">tour and travels</option>
                </select>
              </div>

              <div>
                <label htmlFor="pr">Post required -</label>
                <input
                  className="cinput"
                  value={job.postrequired}
                  onChange={change}
                  type="string"
                  placeholder="helper,etc.."
                  name="postrequired"
                  id="pr"
                />
              </div>
              <div>
                <label htmlFor="er">Experience required -</label>
                <input
                  className="cinput"
                  value={job.experience}
                  onChange={change}
                  type="text"
                  placeholder="?"
                  name="experience"
                  id="er"
                />
              </div>
              <div>
                <label htmlFor="sal">Salary -</label>
                <input
                  className="cinput"
                  value={job.salary}
                  onChange={change}
                  type="number"
                  placeholder="salary"
                  name="salary"
                  id="sal"
                />
              </div>
              <div>
                <label htmlFor="pg">Prefered gender -</label>
                <input
                  className="cinput"
                  value={job.pgender}
                  onChange={change}
                  type="text"
                  placeholder="male or female or both"
                  name="pgender"
                  id="pg"
                />
              </div>
              <div>
                <label htmlFor="nop">Number of openings -</label>
                <input
                  className="cinput"
                  value={job.noopen}
                  onChange={change}
                  type="number"
                  placeholder="?"
                  name="noopen"
                  id="nop"
                />
              </div>
              <div>
                {/* <label htmlFor="s">Shift(day) -</label>
                <input
                  className="cinput"
                  value={job.time}
                  onChange={change}
                  type="text"
                  placeholder="full time or part time"
                  name="time"
                  id="s"
                /> */}
                <label htmlFor="time">Choose time:</label>

                <select
                  className="cinput"
                  name="time"
                  id="time"
                  value={job.time}
                  onChange={change}
                >
                  <option value="full">full time</option>
                  <option value="part">part time</option>
                </select>
              </div>
              <div>
                <label htmlFor="cn">Contact number -</label>
                <input
                  className="cinput"
                  value={job.contact}
                  onChange={change}
                  type="Number"
                  placeholder="?"
                  name="contact"
                  id="cn"
                />
              </div>
              <div>
                <label htmlFor="l">Location -</label>
                <input
                  className="cinput"
                  value={job.location}
                  onChange={change}
                  type="text"
                  placeholder="?"
                  name="location"
                  id="l"
                />
              </div>
            </div>
            <br />
            <hr />
            <p className="pt-4 text-sm text-gray-500">
              This information will keep private
            </p>
            <div className="mt-3">
              <label htmlFor="aadhar">Aadhar number -</label>
              <input
                className="cinputsafe"
                value={job.aadhar}
                onChange={change}
                type="text"
                name="aadhar"
                id="aadhar"
                placeholder="private"
              />
            </div>
            <div>
              <button onClick={submit} className="button-magic">
                {ready ? 'Create' : 'wait...'}
              </button>
            </div>
            <div>
              <p className="cursor-pointer p-3 text-sm text-gray-500 hover:underline">
                Read all terms and conditions before creating *
              </p>
            </div>
          </div>
        </div>
        <div className="bottom-0 mt-20">
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

export default CreateJob
