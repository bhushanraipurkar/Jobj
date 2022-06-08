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
import { Menu } from '@headlessui/react'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import toast from 'react-hot-toast'

const Header = () => {
  const { data: session } = useSession()
  const print = () => {
    toast.success('Notification stack is clear.')
  }

  return (
    <div className="sticky top-0 z-40 flex items-center justify-between bg-white p-3 shadow-sm">
      <div className=" mx-14 flex flex-1 items-center justify-between">
        <Link href="/">
          <div className="flex cursor-pointer text-xl">
            <p className="text-red-500">job</p>
            <p className="font-semibold">Jeevan</p>
          </div>
        </Link>
        <div className="">
          <SearchBox />
        </div>
      </div>

      <div className="flex items-center space-x-3 pr-3">
        <TranslateIcon
          className=" hidden h-7 w-7 max-w-fit cursor-pointer transition-all duration-200 hover:text-blue-500 
        sm:inline "
        />
        <BellIcon
          onClick={print}
          className="hidden h-7 w-7 max-w-fit animate-bounce cursor-pointer transition-all duration-200 
        hover:text-blue-500 sm:inline"
        />
        <Link href={'/main'}>
          <NewspaperIcon
            className="hidden h-7 w-7 max-w-fit cursor-pointer transition-all duration-200 hover:text-blue-500 
        sm:inline"
          />
        </Link>

        <hr className=" border-gray-10 h-10 border" />
        <DotsCircleHorizontalIcon
          className="inline h-7 w-7 max-w-fit cursor-pointer transition-all duration-200 hover:text-blue-500 
        sm:hidden"
        />
        {/* <div className="relative">
          <div className="absolute top-0 right-0 h-3 w-3 rounded-full bg-red-600"></div>
          {/* <UserCircleIcon className="h-8 w-8" /> */}
        {/* </div> */}
        <List />
        <Theme />
      </div>
    </div>
  )
}

const List = (): any => {
  const { data: session } = useSession()
  if (session) {
    return (
      <Menu as="div">
        <Menu.Button className="mt-2 active:outline-none">
          <div className="relative">
            <div
              className={`${
                session ? 'hidden' : 'inline'
              } absolute top-0 right-0 h-3 w-3 rounded-full bg-red-600`}
            ></div>
            {session?.user?.image ? (
              <img
                className="h-10 w-10 rounded-full"
                src={`${session.user.image}`}
                alt="profile"
              />
            ) : (
              <UserCircleIcon className="h-8 w-8" />
            )}
            {/* <UserCircleIcon className="h-8 w-8" /> */}
          </div>
        </Menu.Button>
        <Menu.Items className="absolute right-[2%] z-10 w-52  rounded-lg  border-2 bg-white shadow-2xl focus:outline-none">
          <Menu.Item as="div" onClick={() => signOut()}>
            {({ active }) => (
              <div
                // onClick={() => signOut()}
                className={`flex cursor-pointer flex-row gap-5  border-b-2 border-gray-100 px-5 py-2 ${
                  active
                    ? 'bg-gradient-to-r from-slate-900 to-slate-800 text-white'
                    : 'text-gray-600'
                }`}
              >
                {/* <GitHubIcon /> */}
                Sign Out
              </div>
            )}
          </Menu.Item>

          <Menu.Item as="div">
            {({ active }) => (
              <Link href={'/created'}>
                <div
                  className={`flex cursor-pointer flex-row gap-5  border-b-2 border-gray-100 px-5 py-2 ${
                    active
                      ? 'bg-gradient-to-r from-slate-900 to-slate-800 text-white'
                      : 'text-gray-600'
                  }`}
                >
                  {/* <GitHubIcon /> */}
                  Job own
                </div>
              </Link>
            )}
          </Menu.Item>

          <Menu.Item as="div">
            {({ active }) => (
              <Link href={'/createjob'}>
                <div
                  className={`flex cursor-pointer flex-row gap-5  border-b-2 border-gray-100 px-5 py-2 ${
                    active
                      ? 'bg-gradient-to-r from-slate-900 to-slate-800 text-white'
                      : 'text-gray-600'
                  }`}
                >
                  {/* <GitHubIcon /> */}
                  create job
                </div>
              </Link>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    )
  } else {
    return (
      <Menu as="div" onClick={() => signIn()}>
        <Menu.Button className="mt-2 active:outline-none">
          <div className="relative">
            <div
              className={`${
                session ? 'hidden' : 'inline'
              } absolute top-0 right-0 h-3 w-3 rounded-full bg-red-600`}
            ></div>
            <UserCircleIcon className="h-8 w-8" />
          </div>
        </Menu.Button>
      </Menu>
    )
  }
}

export default Header
