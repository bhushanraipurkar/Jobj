import { MoonIcon as Night } from '@heroicons/react/solid'
import { MoonIcon as Day } from '@heroicons/react/outline'
import { useState } from 'react'

const Theme = () => {
  const [theme, setTheme] = useState<boolean>(false)

  if (theme) {
    return (
      <Day
        onClick={() => setTheme(!theme)}
        className="h-8 w-8 max-w-fit cursor-pointer transition-all duration-200 "
      />
    )
  } else {
    return (
      <Night
        onClick={() => setTheme(!theme)}
        className="h-8 w-8 max-w-fit animate-pulse cursor-pointer text-yellow-500 transition-all duration-200"
      />
    )
  }
}

export default Theme
