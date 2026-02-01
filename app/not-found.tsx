'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white">
      <h1 className="text-6xl font-semibold text-[#532F82] mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="bg-[#532F82] text-white px-6 py-3 rounded-md hover:bg-[#41236c] transition"
      >
        Go back home
      </Link>
    </div>
  )
}
