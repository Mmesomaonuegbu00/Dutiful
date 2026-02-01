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
      desc: 'Suites (C113 & C114) Akord Shopping Mall, Bogije, Elemoro, 101001, Lagos, Nigeria',
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
    <section className="w-full relative">

      <div
        className="w-full h-67 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/purplebg.png')" }}
      >
        <div className="w-full max-w-360 mx-auto text-center text-white px-6 pt-16 flex flex-col gap-2">
          <h1 className="text-2xl md:text-3xl lg:text-[36px] leading-tight font-semibold font-heading">
            Get in touch
          </h1>
          <p className="text-[#EDDFFF] text-base lg:text-[20px] leading-relaxed">
            We are here to support you throughout the process of getting your business listed
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center -mt-10 relative z-10">
        <div className="w-full max-w-360 mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
      </div>

      <div className="w-full flex justify-center pt-24">
        <ContactForm />
      </div>

    </section>
  )
}

export default BusinessDirectory
