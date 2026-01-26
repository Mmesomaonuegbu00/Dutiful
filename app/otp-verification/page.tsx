'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const OtpVerification = () => {
    const [otp, setOtp] = useState(['', '', '', ''])

    const handleChange = (value: string, index: number) => {
        if (!/^\d?$/.test(value)) return

        const newOtp = [...otp]
        newOtp[index] = value
        setOtp(newOtp)

        const nextInput = document.getElementById(`otp-${index + 1}`)
        if (value && nextInput) nextInput.focus()
    }

    return (
        <div className="min-h-screen  px-6 pt-[20vh] font-navbar">
            <div className="max-w-md mx-auto text-center">

                <div className="flex justify-center gap-3 mb-6">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            id={`otp-${index}`}
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(e.target.value, index)}
                            className="w-14 h-14 text-center text-lg bg-[#E7EAF1] border border-[#B6B6E5] rounded-md focus:outline-none focus:border-[#603F8B]"
                        />
                    ))}
                </div>

                <p className="text-sm font-navbar mb-6 max-w-sm">
                    Enter OTP code that was sent to your email,{' '}
                    <span className="font-medium">segunsolaru@gmail.com</span>.
                </p>

                <Link href="/reset-password">
                    <button className="w-full bg-[#603F8B] text-white py-3 rounded-md font-medium text-sm hover:opacity-90 transition">
                        Confirm OTP
                    </button>
                </Link>

                <p className="text-sm mt-6">
                    Didn’t get a code?{' '}
                    <button className="text-[#603F8B] font-medium">
                        Resend
                    </button>
                </p>

            </div>
        </div>
    )
}

export default OtpVerification
