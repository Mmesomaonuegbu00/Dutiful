'use client'

import React from 'react'
import { BiCheck } from 'react-icons/bi'

interface PricingCardProps {
  title: string
  price: number
  currency?: string
  isFree?: boolean
  features: string[]
}

const PricingCard = ({ title, price, currency = 'NGN', isFree, features }: PricingCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-6 hover:shadow-xl transition w-full lg:max-w-103.25">
      
      <h2 className="text-[22px] font-medium text-black">{title}</h2>

      <div className="flex items-baseline gap-2">
        <span className="text-sm font-medium text-black">{currency}</span>
        {isFree ? (
          <h1 className="text-[48px] font-heading font-semibold text-black">Free</h1>
        ) : (
          <div className="flex items-baseline gap-1">
            <h1 className="text-[48px] font-heading font-semibold text-black">{price.toLocaleString()}</h1>
            <span className="text-[20px] text-black font-semibold"> /year</span>
          </div>
        )}
      </div>

      <button className="bg-[#532F82] text-white font-medium py-3 rounded-md hover:bg-[#41236c] transition w-full h-14 text-[18px]">
        Get Started
      </button>

      <ul className="flex flex-col gap-5">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
            <BiCheck className="text-black" size={20} />
            <span className="text-[#656565] text-[20px]">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PricingCard
