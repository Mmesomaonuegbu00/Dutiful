'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FiEye, FiEyeOff } from 'react-icons/fi'

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen px-6 pt-[20vh] font-navbar">
      <div className="max-w-md mx-auto">
         <p className="text-sm text-gray-500 mb-2">
          Jump right back in
        </p>
        <h1 className=" text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          Login
        </h1>

       

        <form className="space-y-5">
          <div>
            <label className="block text-sm mb-1 text-[#603F8B]">
              Email
            </label>
            <input
              type="email"
              className="w-full bg-[#E7EAF1] border border-[#E7EAF1] rounded-md px-4 py-2 focus:outline-none focus:border-[#603F8B]"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-[#603F8B]">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full bg-[#E7EAF1] border border-[#E7EAF1] rounded-md px-4 py-2 pr-10 focus:outline-none focus:border-[#603F8B]"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-sm text-[#603F8B]"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[#603F8B] text-white py-3 rounded-md font-medium hover:opacity-90 transition text-sm"
          >
            Login
          </button>
        </form>
         <p className="text-sm mt-6 text-center">
                Don&apos;t have an account?{' '}
                    <Link href="/signup" className="text-[#603F8B] font-medium">
                        Sign up
                    </Link>
                </p>
      </div>
    </div>
  )
}

export default LoginForm
