'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface ConfirmationPageProps {
  email?: string
  imageSrc?: string
}

const ConfirmationPage = ({
  email = 'segunsolaru@gmail.com',
  imageSrc = '/comfirm.svg'
}: ConfirmationPageProps) => {
  return (
    <div className="min-h-screen  px-6 pt-[20vh] font-navbar">
      <div className="max-w-md mx-auto text-center">

        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#F8F3FF] flex items-center justify-center overflow-hidden">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt="Confirmation"
              width={96}
              height={96}
              className="w-auto h-12 object-contain"
            />
          ) : (
            <span className="text-[#603F8B] font-bold">IMG</span>
          )}
        </div>



        <p className="text-sm text-gray-500 mb-8">
          An OTP code has been sent to {email}. Check your email to get the code.
        </p>

        <Link href="/otp-verification">
          <button className="w-full bg-[#603F8B] text-sm text-white py-3 rounded-md font-medium hover:opacity-90 transition">
            Next
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ConfirmationPage
