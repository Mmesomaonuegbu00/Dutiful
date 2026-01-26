'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavItem from './NavItem'
import { HiBars3CenterLeft } from 'react-icons/hi2'
import { BiX } from 'react-icons/bi'

const navLinks = [
    { href: '/search', icon: 'search' },
    { href: '/directory', label: 'Business Directory' },
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog' },
]

const Nav = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="bg-white fixed top-0 z-50 w-full h-20">
            <div className="xl:w-[75%] w-[90%] mx-auto flex items-center justify-between h-full font-navbar">

                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={80}
                        height={40}
                        className="h-10 w-auto object-contain cursor-pointer"
                    />
                </Link>

                <div className="hidden lg:flex items-center gap-4">
                    {navLinks.map((link) => (
                        <NavItem
                            key={link.href}
                            href={link.href}
                            label={link.label}
                            icon={link.icon as 'search' | undefined}
                        />
                    ))}
                </div>

                <div className="hidden lg:flex items-center gap-4">
                    <Link
                        href="/login"
                        className="h-9 flex items-center px-4 border border-gray-300 rounded-md text-gray-600 hover:text-[#532F82] hover:border-[#532F82]"
                    >
                        Login
                    </Link>

                    <Link
                        href="/signup"
                        className="h-9 flex items-center px-4 border border-[#532F82] rounded-md text-[#532F82]"
                    >
                        Sign up
                    </Link>
                </div>

                <button
                    onClick={() => setOpen(!open)}
                    className="lg:hidden"
                >
                    {open ? <BiX size={24} /> : <HiBars3CenterLeft size={24} />}
                </button>
            </div>

            {open && (
                <div className='bg-black/60 h-screen w-full'>
                    <div className="lg:hidden bg-white font-navbar pb-7">
                        <div className="flex flex-col gap-4 items-center p-4">
                            {navLinks.map((link) => (
                                <NavItem
                                    key={link.href}
                                    href={link.href}
                                    label={link.label}
                                    icon={link.icon as 'search' | undefined}
                                />
                            ))}

                            <Link href="/login">Login</Link>
                            <Link href="/signup">Sign up</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Nav
