import { NextPage } from 'next'
import { useRouter } from 'next/router'
import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from 'react'
import Ajobs from '../../components/Ajobs'
import Header from '../../components/Header'
import Poster from '../../components/Poster'
import Previewr from '../../components/Previewer'

const MetaData: NextPage = () => {
  const router = useRouter()

  const [data, setData] = useState<{
    image: string
    title: string
    subTopics?: string[]
  }>({ image: '', title: '', subTopics: [] })

  useEffect(() => {
    const slug: any = router.query.metadata || []
    setData({
      image: slug[0],
      title: slug[1],
      subTopics: slug[2]?.split(',') || [
        'helper',
        'word boy',
        'security guard',
      ],
    })
  }, [router])
  console.log(data)

  return (
    <div>
      <Header />
      {/* <h1>Metadata page</h1> */}
      {/* <p>{slug[0]}</p>
      <p>{slug[1]}</p>
      <p>{slug[2]}</p> */}
      <div className="md:mx-36 md:mt-14 ">
        <div className="mx-auto mb-5">
          <Poster title={data.title} image={data.image} />
        </div>
        <hr />
        <div className="mt-6 mb-5 flex flex-row flex-wrap gap-10">
          {data.subTopics?.map((i: string) => {
            return (
              <h1 className="cursor-pointer rounded-3xl border-2 p-1 px-3 text-base hover:border-2 hover:border-gray-400 hover:bg-gray-200 hover:shadow-md">
                {i}
              </h1>
            )
          })}
        </div>
        <hr />
      </div>

      {/* <div className="md:mx-36 md:mt-14 lg:mx-60">
        <Previewr
          desc="It is a long established fact that um is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,"
          image="sample.jpg"
        />
      </div> */}

      <div className="mt-20">
        <Ajobs title={data.title} />
      </div>
    </div>
  )
}

export default MetaData
