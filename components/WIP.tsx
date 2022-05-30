import { CogIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'

const WIP = () => {
  const router = useRouter()
  return (
    <div className="h-screen w-full items-center bg-black text-center text-white">
      <div className="flex flex-row gap-5 pl-[40%] pt-20">
        <CogIcon className=" h-20 w-20 animate-spin " />
        <CogIcon className=" h-20 w-20 animate-spin" />
        <CogIcon className=" h-20 w-20 animate-spin" />
      </div>
      <h1 className="pt-20 text-8xl">Work in progress</h1>
      <button
        className="mt-14 border-2 border-white p-2 px-2 transition-all duration-200 active:rotate-45"
        onClick={() => {
          router.push('/')
        }}
        type="submit"
      >
        Go back
      </button>
    </div>
  )
}

export default WIP
