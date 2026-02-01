import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className="w-full flex justify-center pt-32 lg:pt-22.5">
      <div className="max-w-360 w-full mx-auto lg:h-158.5 flex items-center px-6">
        <div className="flex flex-col lg:flex-row items-center w-full gap-19.75">

          
          <div className="flex flex-col gap-4 lg:max-w-137.5">
            <h1 className="text-[#230B34] text-2xl md:text-3xl lg:text-[36px] leading-tight font-semibold font-heading">
              List and grow your business with just few clicks
            </h1>
            <p className="text-[#383838] text-base lg:text-[20px] leading-relaxed">
              Eliminate manual work and save time by listing your business or service on the best business directory in Nigeria.
            </p>
          </div>

          
          <div className="shrink-0 lg:pt-24">
            <Image
              src="/heroimg.png"
              alt="Hero Image"
              width={600}
              height={634}
              className="w-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
