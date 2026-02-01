'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

interface NavItemProps {
    href: string
    label?: string
    icon?: 'search'
}

const NavItem = ({ href, label, icon }: NavItemProps) => {
    const pathname = usePathname()
    const isActive = pathname === href

    return (
        <Link
            href={href}
            className={`
                flex items-center justify-center
                h-10
                px-5
                text-[18px]
                transition-colors
                ${isActive ? 'text-[#532F82]' : 'text-[#686868]'}
                hover:text-[#532F82]
            `}
        >
            {icon === 'search' && (
                <Image
                    src="/search.png"
                    alt="Search"
                    width={24}
                    height={24}
                />
            )}
            {label && <span className="ml-1">{label}</span>}
        </Link>
    )
}

export default NavItem
