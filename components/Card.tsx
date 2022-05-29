import React from 'react'

interface Props {
  image: string
  title: string
  subTopics: string[]
}

const Card = ({ image, title, subTopics }: Props) => {
  return (
    <div
      className="rounded-r-rounded-t-2xl mt-5 w-full rounded-t-2xl bg-white  shadow-lg
    hover:shadow-2xl sm:w-[45%] lg:w-[30%] xl:w-[20%]"
    >
      <div className=" w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="rounded-r-rounded-t-2xl rounded-t-2xl object-cover
            transition-all duration-100 hover:scale-110"
        />
      </div>
      <div className="">
        <p className="ml-4 py-3 text-xl">
          <span className="text-2xl">• </span>
          {title}
        </p>

        <div
          className="my-2 mx-5 flex flex-wrap space-x-3 pt-3 pb-8 text-sm
            leading-10"
        >
          {subTopics.map((i, num) => {
            return (
              <div key={num}>
                <h1
                  className="cursor-pointer text-base text-gray-400 transition-all duration-300 hover:text-[15px]
                            hover:text-blue-700 hover:underline sm:text-sm"
                >
                  {i}{' '}
                </h1>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Card
