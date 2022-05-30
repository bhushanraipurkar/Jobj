import Image from 'next/image'

interface Props {
  image: string
  title: string
}

const Poster = ({ image, title }: Props) => {
  return (
    <div className="">
      <div className="">
        <h1 className="text-5xl">{title}</h1>
      </div>
    </div>
  )
}

export default Poster
