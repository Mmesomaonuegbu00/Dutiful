/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Review = () => {
  return (
    <div className="w-full pt-[8vh] md:pt-[12vh] pb-[2vh]">
      <div className="flex justify-center flex-col xl:w-[75%] w-[90%] h-full mx-auto">
        <div className="grid relative grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Image Column */}
          <div className="relative flex w-full h-90 lg:h-125 order-2 lg:order-1">
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="absolute -z-10 flex items-center justify-center w-50 h-50 lg:w-115 lg:h-115 rounded-full bg-[#603F8B] blur-3xl opacity-70">
                <div className="w-30 h-30 lg:w-105 lg:h-105 bg-white rounded-full" />
              </div>
            </div>

            <img
              src="/reveiw.png"
              alt="review image"
              className="w-auto absolute -top-8 md:top-10 left-2 lg:-top-10 sm:left-20 pt-2"
            />

            <img
              src="/reveiw2.png"
              alt="review image"
              className="w-auto absolute top-30 md:right-30 -right-2 lg:top-30 lg:right-5"
            />

            <img
              src="/reveiw3.png"
              alt="review image"
              className="hidden xl:block w-auto absolute md:-bottom-30 -right-5 sm:right-20 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>

          {/* Text Column */}
          <div className="flex flex-col justify-center max-w-2xl order-1 lg:order-2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 leading-tight mb-6 font-heading">
              Collect reviews and ratings from customers
            </h1>
            <p className="font-navbar text-base text-gray-600">
              Accelerate your business reputation by 90% and gain social proof
              through reviews and ratings requested from customers.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Review
