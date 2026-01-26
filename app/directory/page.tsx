/* eslint-disable @next/next/no-img-element */
import ContactForm from '@/Components/ContactForm'
import InfoCard from '@/Components/DirectoryCard'
import React from 'react'

const BusinessDirectory = () => {

  const infoCards = [
    {
      id: 1,
      title: 'Customer Support',
      desc: 'Please fill out the form below',
      icon: '/sms-tracking.svg',
    },
    {
      id: 2,
      title: 'Business address',
      desc: 'Suites (C113 & C114) Akord Shopping Mall,Bogije, Elemoro, 101001, Lagos, Nigeria',
      icon: '/map.svg',
    },
    {
      id: 3,
      title: 'Phone number',
      desc: '+234 903 921 6724',
      icon: '/call-calling.svg',
    },
  ]

  return (
    <div className="font-navbar min-h-screen relative">
      <div className="w-full bg-[#532F82] lg:h-[30vh] flex items-center">
        <div className="flex flex-col items-center text-center xl:w-[75%] w-[90%] mx-auto text-white pt-28 md:pt-[10vh] pb-[5vh]">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">Get in touch</h1>
          <p className="text-sm md:text-base">
            We are here to support you throughout the process of getting your business listed
          </p>
        </div>
      </div>

      <div className="mt-12 md:mt-0 lg:absolute  top-[18vh] lg:top-[25vh] lg:left-1/2 lg:-translate-x-1/2 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 xl:w-[70%] w-[90%] mx-auto mt-6 lg:mt-0">
          {infoCards.map((card) => (
            <InfoCard
              key={card.id}
              title={card.title}
              desc={card.desc}
              icon={
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-10 h-10"
                />
              }
            />
          ))}
        </div>
      </div>

      <div className="pt-[3vh] xl:pt-[12vh]">
        <ContactForm />
      </div>
    </div>
  )
}

export default BusinessDirectory
