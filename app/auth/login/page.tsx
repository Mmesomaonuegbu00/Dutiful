'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FiEye, FiEyeOff } from 'react-icons/fi'

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen px-6 pt-[16vh] md:pt-[20vh] ">
      <div className="w-full max-w-121.5 mx-auto">
        <p className="text-[16px] text-[#686868] mb-2">
          Jump right back in
        </p>
        <h1 className="text-2xl md:text-[36px] font-heading font-semibold text-gray-800 mb-10">
          Login
        </h1>

        <form className="space-y-5">
          <div>
            <label className="block text-[16px] mb-1 text-[#603F8B]">
              Email
            </label>
            <input
              type="email"
              className="w-full bg-[#F8FAFD] border max-h-14 md:h-14 border-[#E7EAF1] rounded-md px-4 py-2 focus:outline-none focus:border-[#603F8B]"
            />
          </div>

          <div>
            <label className="block text-[16px] mb-1 text-[#603F8B]">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full bg-[#F8FAFD] max-h-14 md:h-14 border border-[#E7EAF1] rounded-md px-4 py-2 pr-10 focus:outline-none focus:border-[#603F8B]"
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

          <div className="flex justify-end cursor-pointer">
            <Link
              href="/auth/forgot-password"
              className="text-sm text-[#A16AE8]"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full h-16 cursor-pointer bg-[#532F82] text-white text-[18px] font-semibold rounded-md flex items-center justify-center shadow-[2px_8px_8px_#565656]"
          >
            Login
          </button>
        </form>

        <p className="text-sm mt-6 text-center text-[#A3B1BF]">
          Don&apos;t have an account?{' '}
          <Link href="/auth/signup" className="text-[#A16AE8] text-base font-medium cursor-pointer">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginForm
