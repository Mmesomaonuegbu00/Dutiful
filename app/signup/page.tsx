'use client'

import React, { useState } from 'react'
import { BiUser, BiHome, BiCheck } from 'react-icons/bi'
import Link from 'next/link'

const SignUpForm = () => {
    const [accountType, setAccountType] = useState<'user' | 'provider'>('user')

    return (
        <div className="min-h-screen  px-6 pt-[20vh] mb-20 font-navbar">
            <div className="max-w-md mx-auto">
                <p className="text-sm text-[#603F8B] font-medium mb-2">
                    Sign up free
                </p>

                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                    Get started
                </h1>

                <div className="flex gap-4 mb-8">
                    <button
                        type="button"
                        onClick={() => setAccountType('user')}
                        className={`relative flex items-center gap-2 border rounded-lg px-4 md:py-3 w-full
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
                        <label className="block text-sm mb-1">Full name</label>
                        <input
                            type="text"
                            className="w-full bg-[#E7EAF1] border border-[#E7EAF1] rounded-md px-4 py-2 focus:outline-none focus:border-[#603F8B]"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full bg-[#E7EAF1] border border-[#E7EAF1] rounded-md px-4 py-2 focus:outline-none focus:border-[#603F8B]"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Phone number</label>
                        <input
                            type="tel"
                            className="w-full bg-[#E7EAF1] border border-[#E7EAF1] rounded-md px-4 py-2 focus:outline-none focus:border-[#603F8B]"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full bg-[#E7EAF1] border border-[#E7EAF1] rounded-md px-4 py-2 focus:outline-none focus:border-[#603F8B]"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Re-Password</label>
                        <input
                            type="password"
                            className="w-full bg-[#E7EAF1] border border-[#E7EAF1] rounded-md px-4 py-2 focus:outline-none focus:border-[#603F8B]"
                        />
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                        <input type="checkbox" />
                        <span>
                            I agree to the <span className="text-[#603F8B]">terms & conditions</span>
                        </span>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#603F8B] text-white py-3 rounded-md font-medium hover:opacity-90 transition"
                    >
                        Sign up
                    </button>
                </form>

                <p className="text-sm mt-6 text-center">
                    Already have an account?{' '}
                    <Link href="/login" className="text-[#603F8B] text-sm font-medium">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default SignUpForm
