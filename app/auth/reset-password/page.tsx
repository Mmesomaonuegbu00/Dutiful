'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FiEye, FiEyeOff } from 'react-icons/fi'

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showRePassword, setShowRePassword] = useState(false)

  return (
    <div className="min-h-screen px-6 pt-[16vh] md:pt-[20vh]">
      <div className="w-full max-w-121.5 mx-auto">
        <h1 className="text-2xl md:text-[36px] font-heading font-bold text-gray-800 mb-2">
          Reset password
        </h1>

        <p className="text-[16px] text-[#686868] mb-8">
          Set your new password
        </p>

        <form className="space-y-5">
          <div>
            <label className="block text-[16px] mb-1 text-[#603F8B]">
              Enter new password
            </label>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full bg-[#F8FAFD] border border-[#E7EAF1] rounded-md px-4 py-2 pr-10 focus:outline-none focus:border-[#603F8B]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              >
                {showPassword ? (
                  <FiEyeOff className="text-[#A16AE8]" />
                ) : (
                  <FiEye className="text-[#A16AE8]" />
                )}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-[16px] mb-1 text-[#603F8B]">
              Re-enter new password
            </label>

            <div className="relative">
              <input
                type={showRePassword ? 'text' : 'password'}
                className="w-full bg-[#F8FAFD] border border-[#E7EAF1] rounded-md px-4 py-2 pr-10 focus:outline-none focus:border-[#603F8B]"
              />
              <button
                type="button"
                onClick={() => setShowRePassword(!showRePassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              >
                {showRePassword ? (
                  <FiEyeOff className="text-[#A16AE8]" />
                ) : (
                  <FiEye className="text-[#A16AE8]" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-16 bg-[#532F82] text-white text-[18px] font-semibold rounded-md flex items-center justify-center shadow-[2px_8px_8px_#565656] cursor-pointer"
          >
            Reset password
          </button>
        </form>

        <p className="text-sm mt-6 text-center text-[#A3B1BF]">
          or{' '}
          <Link
            href="/auth/signup"
            className="text-[#A16AE8] text-base font-medium cursor-pointer"
          >
            Create account
          </Link>
        </p>
      </div>
    </div>
  )
}

export default ResetPassword
