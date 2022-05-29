import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Job_sorting from '../components/Job_sorting'

const Home: NextPage = () => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>jobJeevan</title>
      </Head>
      <div>
        <Header />
      </div>
      <div className="m-5">
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
