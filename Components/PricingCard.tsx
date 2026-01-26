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
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-6 hover:shadow-xl transition">
      
      <h2 className="text-lg  text-gray-800">{title}</h2>

    
      <div className="flex items-baseline gap-2">
        <span className="text-sm font-medium text-black">{currency}</span>
        {isFree ? (
          <h1 className="text-3xl font-bold text-black">Free</h1>
        ) : (
          <div className="flex items-baseline gap-1">
            <h1 className="text-3xl font-bold text-black">{price.toLocaleString()}</h1>
            <span className="line-through text-sm text-gray-400">year</span>
          </div>
        )}
      </div>

      
      <button className="bg-[#532F82] text-white font-medium py-3 rounded-md hover:bg-[#41236c] transition">
        Get Started
      </button>

      
      <ul className="flex flex-col gap-5">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
            <BiCheck className="text-gray-900" size={20} />
            <span className='text-gray-700 text-sm'>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PricingCard
