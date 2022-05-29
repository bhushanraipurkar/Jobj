import {
  UserCircleIcon,
  DotsCircleHorizontalIcon,
  NewspaperIcon,
  MoonIcon as Day,
  TranslateIcon,
  BellIcon,
} from '@heroicons/react/outline'
import Icons from './Icons'
import SearchBox from './SearchBox'
import Theme from './Theme'

const Header = () => {
  return (
    <div className="sticky top-0 z-40 flex items-center justify-between bg-white p-3 shadow-sm">
      <div className=" mx-14 flex flex-1 items-center justify-between">
        <div className="cursor-pointer text-xl">jobJeevan</div>
        <div className="">
          <SearchBox />
        </div>
      </div>

      <div className="mr-3 flex items-center space-x-3">
        <TranslateIcon
          className=" hidden h-7 w-7 max-w-fit cursor-pointer transition-all duration-200 hover:text-blue-500 
        sm:inline "
        />
        <BellIcon
          className="hidden h-7 w-7 max-w-fit animate-bounce cursor-pointer transition-all duration-200 
        hover:text-blue-500 sm:inline"
        />
        <NewspaperIcon
          className="hidden h-7 w-7 max-w-fit cursor-pointer transition-all duration-200 hover:text-blue-500 
        sm:inline"
        />
        <hr className=" border-gray-10 h-10 border" />
        <DotsCircleHorizontalIcon
          className="inline h-7 w-7 max-w-fit cursor-pointer transition-all duration-200 hover:text-blue-500 
        sm:hidden"
        />
        <Icons key={1} Ic={UserCircleIcon} title="userIcon" />
        <Theme />
      </div>
    </div>
  )
}

export default Header
