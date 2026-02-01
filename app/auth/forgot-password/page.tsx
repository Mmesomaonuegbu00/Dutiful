'use client'

import React from 'react'
import Link from 'next/link'
import { FiMail } from 'react-icons/fi'
import { FiArrowLeft } from 'react-icons/fi'

const ForgotPassword = () => {
  return (
    <div className="min-h-screen px-6 pt-[20vh]">
      <div className="w-full max-w-121.5 mx-auto">

        <button
          type="button"
          className="mb-8 w-8 h-8 flex items-center justify-center rounded-full border border-[#E5E7EA] text-[#603F8B]"
          onClick={() => window.history.back()}
        >
          <FiArrowLeft />
        </button>

        <h1 className="text-2xl md:text-[36px] font-heading font-semibold text-gray-800 mb-2">
          Forgot password
        </h1>

        <p className="text-[16px] text-[#686868] mb-10">
          Enter your email and we’ll send you a mail on how to reset your password.
        </p>

        <form className="space-y-5">
          <div>
            <label className="block text-[16px] mb-1 text-[#603F8B]">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full bg-[#F8FAFD] border max-h-14 h-14 border-[#E7EAF1] rounded-md px-4 py-2 pr-10 focus:outline-none focus:border-[#603F8B]"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A16AE8]">
                <FiMail />
              </span>
            </div>
          </div>

          <Link href="/auth/comfirm">
            <button
              type="button"
              className="w-full h-16 bg-[#532F82] text-white text-[18px] font-semibold rounded-md flex items-center justify-center shadow-[2px_8px_8px_#565656] cursor-pointer"
            >
              Send email
            </button>
          </Link>
        </form>

        <p className="text-base mt-6 text-center text-[#A3B1BF]">
          or{' '}
          <Link href="/auth/login" className="text-[#A16AE8] text-base font-medium cursor-pointer">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default ForgotPassword
