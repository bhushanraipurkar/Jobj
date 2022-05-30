interface Props {
  desc: string
  image: string
}

const Previewr = ({ desc, image }: Props) => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <div className="my-auto">
        <h1>{desc}</h1>
      </div>

      <img className="h-80 w-1/2" src={`/${image}`} />
    </div>
  )
}

export default Previewr
