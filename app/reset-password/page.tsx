'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FiEye, FiEyeOff } from 'react-icons/fi'

const ResetPassword = () => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="min-h-screen  px-6 pt-[20vh] font-navbar">
            <div className="max-w-md mx-auto">

                <h1 className="text-3xl font-bold mb-2">
                    Reset password
                </h1>

                <p className="text-sm text-gray-500 mb-8">
                    Set your new password
                </p>

                <form className="space-y-5">
                    <div>
                        <label className="block text-sm mb-1 text-[#603F8B]">
                            Enter new password
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

                    <div>
                        <label className="block text-sm mb-1 text-[#603F8B]">
                            Re-enter new password
                        </label>
                        <input
                            type="password"
                            className="w-full bg-[#E7EAF1] border border-[#E7EAF1] rounded-md px-4 py-2 focus:outline-none focus:border-[#603F8B]"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#603F8B] text-sm text-white py-3 rounded-md font-medium hover:opacity-90 transition"
                    >
                        Reset password
                    </button>
                </form>

                <p className="text-sm mt-6 text-center">
                    or{' '}
                    <Link href="/signup" className="text-[#603F8B] font-medium">
                        Create account
                    </Link>
                </p>

            </div>
        </div>
    )
}

export default ResetPassword
