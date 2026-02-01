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
        <header className="fixed top-0 z-50 w-full bg-white h-22.5">
            <div className="max-w-360 w-full mx-auto px-6 flex items-center justify-between h-full ">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={80}
                        height={45}
                        className="max-w-22.5 w-full h-auto object-contain"
                    />
                </Link>

                <nav className="hidden xl:flex items-center gap-2.5">
                    {navLinks.map((link) => (
                        <NavItem
                            key={link.href}
                            href={link.href}
                            label={link.label}
                            icon={link.icon as 'search' | undefined}
                        />
                    ))}
                </nav>

                <div className="hidden xl:flex items-center gap-2.5">
                    <Link
                        href="/login"
                        className="px-13 h-12 flex items-center justify-center text-[20px] text-[#1E1E4B]"
                    >
                        Login
                    </Link>

                    <Link
                        href="/signup"
                        className="px-13 h-12 flex items-center justify-center text-[20px] text-[#603F8B] border-2 border-[#603F8B] rounded-md"
                    >
                        Sign up
                    </Link>
                </div>

                <button
                    onClick={() => setOpen(!open)}
                    className="xl:hidden text-[#686868] cursor-pointer"
                >
                    {open ? <BiX size={28} /> : <HiBars3CenterLeft size={28} />}
                </button>
            </div>

            {open && (
                <div className="xl:hidden fixed w-full h-[calc(100%-90px)] bg-black/60 z-40">
                    <div className="bg-white  pt-3 pb-10">
                        <div className="flex flex-col items-center gap-4">
                            {navLinks.map((link) => (
                                <NavItem
                                    key={link.href}
                                    href={link.href}
                                    label={link.label}
                                    icon={link.icon as 'search' | undefined}
                                />
                            ))}

                            <Link
                                href="/login"
                                className="px-13 h-12 flex items-center justify-center text-[16px] text-[#1E1E4B]"
                            >
                                Login
                            </Link>

                            <Link
                                href="/signup"
                                className="px-13 h-12 flex items-center justify-center text-[16px] text-[#603F8B] border border-[#603F8B] rounded-md"
                            >
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Nav
