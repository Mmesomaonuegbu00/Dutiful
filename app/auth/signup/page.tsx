'use client'

import React, { useState } from 'react'
import { BiUser, BiHome, BiCheck } from 'react-icons/bi'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import Link from 'next/link'

const SignUpForm = () => {
  const [accountType, setAccountType] = useState<'user' | 'provider'>('user')
  const [showPassword, setShowPassword] = useState(false)
  const [showRePassword, setShowRePassword] = useState(false)

  return (
    <div className="min-h-screen px-6 pt-[16vh] md:pt-[20vh] mb-20">
      <div className="w-full max-w-121.5 mx-auto">
        <p className="text-[16px] text-[#686868] mb-2">
          Sign up free
        </p>

        <h1 className="text-2xl md:text-[36px] font-heading font-semibold text-gray-800 mb-10">
          Get started
        </h1>

        <div className="flex gap-4 mb-8">
          <button
            type="button"
            onClick={() => setAccountType('user')}
            className={`relative flex items-center gap-2 border rounded-lg px-4 py-3 w-full
              ${accountType === 'user'
                ? 'border-[#603F8B] text-[#603F8B]'
                : 'border-gray-300 text-gray-400'
              }`}
          >
            <BiUser size={20} />
            <span className="text-sm font-medium">Regular User</span>

            {accountType === 'user' && (
              <span className="absolute -top-2 -right-2 bg-[#603F8B] text-white rounded-full p-1">
                <BiCheck size={14} />
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setAccountType('provider')}
            className={`relative flex items-center gap-2 border rounded-lg px-4 py-3 w-full
              ${accountType === 'provider'
                ? 'border-[#603F8B] text-[#603F8B]'
                : 'border-gray-300 text-gray-400'
              }`}
          >
            <BiHome size={20} />
            <span className="text-sm font-medium">Service Provider</span>

            {accountType === 'provider' && (
              <span className="absolute -top-2 -right-2 bg-[#603F8B] text-white rounded-full p-1">
                <BiCheck size={14} />
              </span>
            )}
          </button>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-[16px] mb-1 text-[#603F8B]">
              Full name
            </label>
            <input
              type="text"
              className="w-full bg-[#F8FAFD] border border-[#E7EAF1] rounded-md px-4 py-2 focus:outline-none focus:border-[#603F8B]"
            />
          </div>

          <div>
            <label className="block text-[16px] mb-1 text-[#603F8B]">
              Email
            </label>
            <input
              type="email"
              className="w-full bg-[#F8FAFD] border border-[#E7EAF1] rounded-md px-4 py-2 focus:outline-none focus:border-[#603F8B]"
            />
          </div>

          <div>
            <label className="block text-[16px] mb-1 text-[#603F8B]">
              Phone number
            </label>
            <input
              type="tel"
              className="w-full bg-[#F8FAFD] border border-[#E7EAF1] rounded-md px-4 py-2 focus:outline-none focus:border-[#603F8B]"
            />
          </div>

          <div>
            <label className="block text-[16px] mb-1 text-[#603F8B]">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full bg-[#F8FAFD] border border-[#E7EAF1] rounded-md px-4 py-2 pr-10 focus:outline-none focus:border-[#603F8B]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
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
              Re-Password
            </label>

            <div className="relative">
              <input
                type={showRePassword ? 'text' : 'password'}
                className="w-full bg-[#F8FAFD] border border-[#E7EAF1] rounded-md px-4 py-2 pr-10 focus:outline-none focus:border-[#603F8B]"
              />
              <button
                type="button"
                onClick={() => setShowRePassword(!showRePassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showRePassword ? (
                  <FiEyeOff className="text-[#A16AE8]" />
                ) : (
                  <FiEye className="text-[#A16AE8]" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            <span>
              I agree to the <span className="text-[#603F8B]">terms & conditions</span>
            </span>
          </div>

          <button
            type="submit"
            className="w-full h-16 bg-[#532F82] text-white text-[18px] font-semibold rounded-md flex items-center justify-center shadow-[2px_8px_8px_#565656]"
          >
            Sign up
          </button>
        </form>

        <p className="text-sm mt-6 text-center text-[#A3B1BF]">
          Already have an account?{' '}
          <Link href="/login" className="text-[#A16AE8] text-base font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUpForm
