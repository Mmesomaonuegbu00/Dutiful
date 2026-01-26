import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="w-full min-h-[calc(100%-160px)] flex items-center pt-40">

      <div className="flex justify-center flex-col xl:w-[75%] w-[90%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          
          <div className="max-w-2xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 leading-tight mb-6 font-heading">
              List and grow your business with just a few clicks.
            </h1>
            <p className="text-gray-600 text-base lg:text-lg font-navbar">
              Eliminate manual work and save time by listing your business on the best business directory in Nigeria
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/heroimg.png"
              alt="hero image"
              width={700}
              height={700}
              className="max-w-full object-contain h-auto"
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero
