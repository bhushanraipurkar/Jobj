import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { signIn, signOut, useSession } from 'next-auth/react'

const Apply = () => {
  const router = useRouter()
  const { data: session } = useSession()

  const [data, setData] = useState<job>({
    title: '',
    type: '',
    location: [],
  })

  const [apply, setApply] = useState<apply>({
    orgname: data.title,
    name: '',
    address: '',
    aadharnumber: 0,
    phonenumber: 0,
    email: '',
  })

  const change = (e: any) => {
    e.preventDefault()
    setApply((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  useEffect(() => {
    const slug: any = router.query.detail || []
    setData({
      title: slug[0],
      type: slug[1],
      location: slug[2]?.split(',') || ['undefined', 'undefined'],
    })
  }, [router])

  const handlesubmit = (e: any) => {
    e.preventDefault()
    const notification = toast.loading('loading ...')
    if (
      apply.name == '' ||
      apply.address == '' ||
      apply.aadharnumber <= 0 ||
      apply.phonenumber <= 0
    ) {
      toast.error('please fill in all fields !', { id: notification })
      return
    } else {
      if (apply.phonenumber > 999999999) {
        if (apply.aadharnumber > 99999999999) {
          toast.success('successfully applied', { id: notification })
          toast.success('apply more !', { id: notification })
          router.push('/')
        } else {
          toast.error('please use a valid aadhar number', { id: notification })
          return
        }
      } else {
        toast.error('please use a valid phone number', { id: notification })
        return
      }
    }

    toast.success('Successfully applied', { id: notification })
  }

  return (
    <div className="bg-gray-100">
      <div>
        <Header />
      </div>

      <div className="m-4 border bg-white p-4 lg:mx-56">
        <h1 className="text-center text-3xl">{data.title}</h1>
        <div>
          <p className="text-center text-gray-400">
            for <span className="font-medium text-black">{data.type}</span>{' '}
            Role.
          </p>
        </div>
      </div>

      <div className=" my-12 text-center">
        <p className="text-gray-500">
          You are applying to{' '}
          <span className="font-semibold text-gray-900">{data.title}</span> for
          the position of{' '}
          <span className="font-semibold text-gray-900">{data.type}</span> at{' '}
          <span className="font-semibold text-gray-900">
            {data.location[0]} {data.location[data.location.length - 1]}
          </span>
        </p>
        <p className="cursor-pointer text-center text-xs text-gray-600 hover:underline">
          Read All terms and conditions before apply.
        </p>
      </div>
      <div className="">
        <div className="flex flex-col">
          <input
            className="input cursor-not-allowed"
            type="text"
            value={data.title}
          />
          <input
            name="name"
            value={`${session ? session.user?.name : 'please login first'}`}
            onChange={change}
            className={`input cursor-not-allowed ${
              session ? '' : 'border-2 border-red-400'
            }`}
            type="text"
            placeholder="Enter your name here -"
          />
          <input
            name="address"
            value={apply.address}
            onChange={change}
            className="input"
            type="text"
            placeholder="Enter Your address -"
          />
          <hr />

          <div className="mx-16 mt-6">
            <label htmlFor="aadharnumber">Your Aadhar number -</label>
            <input
              id="aadharnumber"
              name="aadharnumber"
              value={apply.aadharnumber}
              onChange={change}
              className="ml-4 rounded-md bg-gray-200 p-2 text-lg placeholder:text-sm focus:outline-none"
              type="number"
              placeholder="aadhar number -"
            />
          </div>
          <div className="mx-16 mt-8">
            <label htmlFor="phonenumber">Your Phone number -</label>

            <input
              name="phonenumber"
              value={apply.phonenumber}
              onChange={change}
              className="ml-4 rounded-md bg-gray-200 p-2 text-lg placeholder:text-sm focus:outline-none"
              type="text"
              placeholder="Enter your phone number -"
            />
          </div>
          <br />
          <input
            name="email"
            value={`${session ? session.user?.email : 'please login first'}`}
            onChange={change}
            className={`input  ${session ? '' : 'border-2 border-red-400'}`}
            type="email"
            placeholder="Enter your email -"
          />
        </div>

        <div className="mx-56 mt-14 text-center">
          {session && (
            <button
              onClick={handlesubmit}
              className=" button-magic "
              type="submit"
            >
              Apply
            </button>
          )}
        </div>
      </div>

      <div className="mt-24">
        <Footer />
      </div>
    </div>
  )
}

export default Apply
