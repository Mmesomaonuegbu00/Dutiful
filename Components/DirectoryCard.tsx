'use client'

import React from 'react'

interface InfoCardProps {
  title: string
  desc: string
  icon?: React.ReactNode
}

const InfoCard = ({ title, desc, icon }: InfoCardProps) => {
  return (
    <div className="bg-white max-w-103.5 lg:h-49.25  rounded-2xl p-3 shadow-md flex flex-col items-center gap-6 transition hover:shadow-lg text-center">

      <div className="flex items-center justify-center gap-1.5">
        {icon && (
          <div className="flex items-center justify-center w-12 h-12 lg:w-12 lg:h-12 rounded-full text-[#532F82]">
            {icon}
          </div>
        )}
        <h5 className="font-semibold text-lg lg:text-[24px]">
          {title}
        </h5>
      </div>

      <p className="text-base lg:text-[18px] text-gray-600">
        {desc}
      </p>

    </div>
  )
}

export default InfoCard
