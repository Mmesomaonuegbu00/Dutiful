'use client'

import React from 'react'
import Link from 'next/link'

const ForgotPasswordForm = () => {
    return (
        <div className="min-h-screen  px-6 pt-[20vh] font-navbar">
            <div className="max-w-md mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    Forgot password
                </h1>

                <p className="text-sm text-gray-500 mb-8">
                    Enter your email and we’ll send you a mail on how to reset your password.
                </p>

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



                    <Link href="/comfirm">
                        <button
                            type="button"
                            className="w-full text-sm bg-[#603F8B] text-white py-3 rounded-md font-medium hover:opacity-90 transition"
                        >
                            Send email
                        </button>
                    </Link>

                </form>

                <p className="text-sm mt-6 text-center">
                    or{' '}
                    <Link href="/login" className="text-[#603F8B] font-medium">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default ForgotPasswordForm
