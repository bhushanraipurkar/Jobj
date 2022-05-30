import { useState } from 'react'
import { SearchCircleIcon as Deep } from '@heroicons/react/solid'

const SearchBox = () => {
  const [hindi, setHindi] = useState<boolean>(false)
  const [inp, setInp] = useState<string>('')

  return (
    <div className="mx-3 ml-3 flex rounded-full border p-2 shadow-sm hover:shadow-md">
      <input
        className="ml-2 flex-1 bg-transparent outline-none placeholder:text-sm lg:w-96 "
        type="text"
        value={inp}
        onChange={(e) => setInp(e.target.value)}
        placeholder={
          hindi ? 'यहां स्थानीय नौकरी खोजें।' : 'Search local job here ...'
        }
      />
      <Deep
        className={`h-7 w-7 transition-all duration-150 ${
          inp.length > 0 ? 'text-blue-500 active:rotate-45' : 'text-gray-400'
        } cursor-pointer `}
      />
    </div>
  )
}

export default SearchBox
