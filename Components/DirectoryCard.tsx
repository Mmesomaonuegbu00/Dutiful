'use client'

import React from 'react'

interface InfoCardProps {
  title: string
  desc: string
  icon?: React.ReactNode
}

const InfoCard = ({ title, desc, icon }: InfoCardProps) => {
  return (
    <div className="bg-white max-w-lg rounded-2xl p-5 shadow-md flex items-start gap-4 transition hover:shadow-lg">
      {icon && (
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F1ECFB] text-[#532F82]">
          {icon}
        </div>
      )}
      <div>
        <h5 className="font-semibold text-sm mb-1">{title}</h5>
        <p className="text-xs text-gray-600">{desc}</p>
      </div>
    </div>
  )
}

export default InfoCard
