/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Review = () => {
  return (
    <div className="w-full flex justify-center pt-32 lg:pt-22.5">
      <div className="max-w-360 lg:h-158.5 w-full mx-auto flex items-center px-6">
        <div className="flex flex-col lg:flex-row w-full items-center gap-19.75">

          <div className="relative flex w-full h-90 lg:h-125 order-2 lg:order-1">
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="absolute -z-10 flex items-center justify-center w-50 h-50 lg:w-115 lg:h-115 rounded-full bg-[#603F8B] blur-3xl opacity-70">
                <div className="w-30 h-30 lg:w-105 lg:h-105 bg-white rounded-full" />
              </div>
            </div>

            <img
              src="/reveiw.png"
              alt="review image"
              className="absolute -top-8 md:top-10 left-2 lg:-top-10 sm:left-45 pt-2 max-w-75.25 w-full"
            />

            <img
              src="/reveiw2.png"
              alt="review image"
              className="absolute top-30 md:right-30 -right-2 lg:top-30  max-w-75.25 w-full"
            />

            <img
              src="/reveiw3.png"
              alt="review image"
              className="hidden xl:block absolute md:-bottom-30 -right-5 sm:right-35 transform -translate-x-1/2 -translate-y-1/2 max-w-75.25 w-full"
            />

          </div>


          <div className="flex flex-col gap-4 lg:max-w-138 order-1 lg:order-2">
            <h1 className="text-[1E1E4B] text-2xl md:text-3xl lg:text-[36px]  font-semibold font-heading leading-tight">
              Collect reviews and ratings from customers
            </h1>
            <p className="text-[#656565] text-base lg:text-[20px]  leading-relaxed">
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
