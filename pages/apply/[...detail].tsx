import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const Apply = () => {
  const router = useRouter()

  const [data, setData] = useState<job>({
    title: '',
    type: '',
    location: [],
  })

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
    // notification

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
            className="input"
            type="text"
            placeholder="Enter your name here -"
          />
          <input
            className="input"
            type="text"
            placeholder="Enter Your address -"
          />
          <input
            className="input"
            type="number"
            placeholder="Enter your aadhar number -"
          />
          <input
            className="input"
            type="text"
            placeholder="Enter your phone number -"
          />
          <input
            className="input"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email -"
          />
        </div>

        <div className="mx-56 mt-14 text-center">
          <button
            onClick={handlesubmit}
            className=" button-magic "
            type="submit"
          >
            Apply
          </button>
        </div>
      </div>

      <div className="mt-24">
        <Footer />
      </div>
    </div>
  )
}

export default Apply
