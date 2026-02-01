'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BiCheck } from 'react-icons/bi'

interface ConfirmationPageProps {
  email?: string
  imageSrc?: string
}

const ConfirmationPage = ({
  email = 'segunsolaru@gmail.com',
  imageSrc = '/comfirm.svg'
}: ConfirmationPageProps) => {
  return (
    <div className="min-h-screen px-6 pt-[16vh] md:pt-[20vh] ">
      <div className="w-full max-w-121.5 mx-auto text-center">
        <div className="relative w-32.5 h-34.75 mx-auto mb-6 rounded-full bg-[#F8F3FF] flex items-center justify-center">
          <Image
            src={imageSrc}
            alt="Confirmation"
            width={76}
            height={66}
            className="object-contain"
          />

          <span className="absolute top-10 right-8 translate-x-1/3 -translate-y-1/3 bg-green-500 text-white rounded-full p-1.5 flex items-center justify-center">
            <BiCheck size={16} />
          </span>
        </div>

        <p className="text-[16px] text-[#686868] mb-8">
          An OTP code has been sent to{' '}
          <span className="font-semibold">{email}</span>. Check your email to get the code.
        </p>

        <Link href="/auth/otp-verification">
          <button className="w-full h-16 bg-[#532F82] text-white text-[18px] font-semibold cursor-pointer rounded-md flex items-center justify-center shadow-[2px_8px_8px_#565656]">
            Next
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ConfirmationPage
