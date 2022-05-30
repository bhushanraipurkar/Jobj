import { LocationMarkerIcon } from '@heroicons/react/solid'
import GoogleIcon from '@mui/icons-material/Google'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'

const Footer = () => {
  return (
    <div className="sticky bottom-0 flex w-full flex-col justify-between border-t bg-gray-300 shadow-lg md:flex-row">
      <div className="m-16 flex-1 lg:ml-20">
        <h1 className="text-lg font-bold">
          <span className="cursor-pointer hover:text-gray-500 hover:underline">
            {' '}
            Terms and Condition{' '}
          </span>
          |
          <span className="cursor-pointer hover:text-gray-500 hover:underline">
            {' '}
            Privacy Policy{' '}
          </span>
          |
          <span className="cursor-pointer hover:text-gray-500 hover:underline">
            {' '}
            Security
          </span>
        </h1>
        <br />
        <p className="flex text-sm">
          <LocationMarkerIcon className="mr-2 h-5 w-5" />
          Priyadarshini College of Engg. Nagpur-440028
          <br />
          Contact us - jobJeevan@gmail.com | 67xxxxxx43
        </p>
        <br />
        <br />
        <p className="text-gray-700">
          @2022 All rights reserved by{' '}
          <span className="cursor-pointer hover:underline">jobJeevan</span>
        </p>
      </div>
      <div className="mx-32 mb-8 flex justify-between md:mx-10 md:mt-40 lg:mx-11">
        <GoogleIcon className="h-10 w-10 cursor-pointer transition-all duration-150 hover:text-red-700  lg:mx-4 lg:h-16 lg:w-14" />
        <LinkedInIcon className="h-10 w-10 cursor-pointer transition-all duration-150 hover:text-blue-700 lg:mx-4 lg:h-16 lg:w-16" />
        <TwitterIcon className="h-10 w-10 cursor-pointer transition-all duration-150 hover:text-blue-700 lg:mx-4 lg:h-16 lg:w-16" />
        <FacebookRoundedIcon className="h-10 w-10 cursor-pointer transition-all duration-150 hover:text-blue-700 lg:mx-4 lg:h-16 lg:w-16" />
      </div>
    </div>
  )
}

export default Footer
