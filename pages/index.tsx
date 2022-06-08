import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Job_sorting from '../components/Job_sorting'
import { signIn, signOut, useSession } from 'next-auth/react'
import { fetchuser } from '../utils/fetchUser'
import toast from 'react-hot-toast'

const Home: NextPage = () => {
  const { data: session } = useSession()
  const [userdata, setUserdata] = useState<userde>({
    name: '',
    email: '',
    phone: '1111',
  })

  const refreshComments = async (email: any) => {
    const user = await fetchuser(email)
    toast.loading('authenticating', { id: 'one' })
    if (user == 404) {
      setUserdata({
        name: JSON.stringify(session?.user?.name),
        email: JSON.stringify(session?.user?.email),
        phone: '0000000000',
      })
    } else {
      toast.success('Authenicated !', { id: 'one' })
    }
  }

  useEffect(() => {
    if (session) {
      const data = refreshComments(session?.user?.email)
    }
  }, [session])

  useEffect(() => {
    if (userdata.email != '') {
      const run = async () => {
        const result = await fetch('/api/adduser', {
          headers: new Headers({
            'Content-Type': 'application/json',
            Accept: 'application/json',
          }),
          body: JSON.stringify({
            name: session?.user?.name,
            email: session?.user?.email,
            phone: '0000000000',
          }),
          method: 'POST',
        })

        const response = await result.json()
        toast.success('Authenicated !', { id: 'one' })

        return response
      }
      run()
    }
  }, [session])

  return (
    <div className="bg-gray-100">
      <Head>
        <title>jobJeevan</title>
      </Head>
      <div>
        <Header />
      </div>
      <div className="">
        <Job_sorting />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
