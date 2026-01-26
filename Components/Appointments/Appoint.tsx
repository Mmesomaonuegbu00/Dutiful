/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Appoint = () => {
  return (
    <div className="w-full pt-[8vh] md:pt-[12vh] pb-[2vh] lg:pb-[20vh]">
      <div className="flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

          
          <div className="flex sm:flex-row flex-col items-center pt-4">
            <div className="flex flex-col">
              <img src="/booked.png" alt="booked" className="w-auto" />
              <img src="/calendar.png" alt="calendar" className="w-auto" />
            </div>

            <img src="/time.png" alt="time" className="w-auto hidden sm:block" />
          </div>

          <div className="flex flex-col justify-center max-w-2xl pb-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 leading-tight mb-6 font-heading">
              Accept and sell appointments
            </h1>
            <p className="font-navbar text-base text-gray-600">
              Let customers book their own appointment or consultation. Start accepting payments for appointments through your booking page.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Appoint
