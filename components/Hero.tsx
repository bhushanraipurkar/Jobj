// const First = require('./First')

import Header from './Header'
import React, { useEffect, useState } from 'react'
import TextTransition, { presets } from 'react-text-transition'
import Footer from './Footer'

const TEXTS = [
  'Worried about the job ?',
  'Finding the job in the locality ?',
  'wanna hike in salary ?',
  'Getting depressed about job ?',
  'had lost job in COVID-19 ?',
]

const second = [
  'find job here.',
  'यहां नौकरी खोजें।',
  'इथे नोकरी शोधा.',
  'ਇੱਥੇ ਨੌਕਰੀ ਲੱਭੋ।',
  'અહીં નોકરી શોધો.',
  'இங்கே வேலை தேடுங்கள்.',
  'یہاں ملازمت تلاش کریں.',
]

const Hero = () => {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    )
    return () => clearTimeout(intervalId)
  }, [])

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="h-80 bg-black">
        <div className=" relative ml-[30%] flex pt-28 text-8xl font-bold text-white md:ml-[36%] md:pt-16 md:text-9xl">
          <p className="absolute  ml-[15%] font-extrabold text-red-500 md:ml-10">
            JOB
          </p>
          <p className=" absolute animate-ping transition-all duration-200">
            Jeevan
          </p>
        </div>
      </div>
      <div className="right-0 bg-black pl-[70%] pb-8 text-white">
        <p className="bottom-0 ">
          <TextTransition
            text={second[index % second.length]}
            springConfig={presets.gentle}
          />
        </p>
      </div>

      <div className="mt-28 items-center">
        <h1 className="ml-10 text-5xl md:ml-28">
          <TextTransition
            text={TEXTS[index % TEXTS.length]}
            springConfig={presets.gentle}
          />
        </h1>
        <div className="m-14 md:m-32">
          <p className="m-8 text-2xl">
            <span className="text-2xl font-bold">Dont Worry !</span> We will
            help you to get the job in your locality with no more efforts at{' '}
            <b>No Cost.</b>
          </p>
          <p className="m-6 text-base first-letter:text-2xl first-letter:font-semibold">
            As in March 2020 we saw a Covid pandemic , which led to shut downs
            of Global markets & many countries announced lockdown. We all know
            that the major effect of this was on employment of peoples Many
            peoples lost their jobs and many have to leave their job unwantedly.
          </p>

          <p className="m-6 first-letter:text-2xl first-letter:font-semibold">
            Conducted by MoE In this crucial time of lockdowns mostly local
            peoples suffered for their jobs.
          </p>

          <p className="m-6 first-letter:text-2xl first-letter:font-semibold">
            As initiative to develop a platform for local peoples & vendors we
            are going to launch a Job Finding platform for local peoples.
          </p>
        </div>
      </div>

      <div className="my-[10%] mx-10 grid md:m-32 md:grid-flow-col md:grid-cols-6">
        <div className="col-span-3  p-8 pt-24 text-center">
          <p className="text-lg font-medium text-gray-700">
            <span className="text-2xl font-bold text-black">No Resume</span>{' '}
            Required for job application.
          </p>
          <p className="text-gray-500">
            Here some description about how we don't required resume will be
            place.
          </p>
        </div>
        <div className="col-span-3">
          <div className="p-10">
            <img
              className="animate-bouncy h-[90%] w-[85%] ease-linear"
              src="./two.svg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="my-[10%] mx-10 grid md:m-32 md:grid-flow-col md:grid-cols-6">
        <div className="col-span-3">
          <div className=" p-10">
            <img className="h-[90%] w-[85%]" src="./one.svg" alt="" />
          </div>
        </div>
        <div className="col-span-3  p-8 pt-24 text-center">
          <p className="text-lg font-medium text-gray-500">
            Hire with{' '}
            <span className="text-2xl font-bold text-black">One Click</span>.
          </p>
          <p className="text-gray-500">
            Here some description about how this will work properly. place.
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Hero
