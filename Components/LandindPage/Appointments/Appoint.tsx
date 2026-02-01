/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'

const Appoint = () => {
  return (
    <div className="w-full flex justify-center pt-32 lg:pt-22.5">
      <div className="max-w-360 lg:h-158.5 w-full mx-auto flex items-center px-6">
        <div className="flex flex-col lg:flex-row w-full items-center gap-19.75">


          <div className="flex sm:flex-row flex-col items-center">

            <div className="flex flex-col">
              <Image
                src="/booked.png"
                alt="booked"
                width={250} 
                height={180}
                className="w-auto h-auto"
              />

              <Image
                src="/calendar.png"
                alt="calendar"
                width={250} 
                height={180}
                className="w-auto h-auto"
              />

            </div>

            <img src="/time.png" alt="time" className="w-auto hidden sm:block" />
          </div>

          <div className="flex flex-col gap-4 lg:max-w-138 pb-6">
            <h1 className="text-[#1E1E4B] text-2xl md:text-3xl lg:text-[36px] font-semibold font-heading leading-tight">
              Accept and sell appointments
            </h1>
            <p className="text-[#656565] text-base lg:text-[20px] leading-relaxed">
              Let customers book their own appointment or consultation. Start accepting payments for appointments through your booking page.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Appoint
