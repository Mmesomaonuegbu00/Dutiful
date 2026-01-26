'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BiSearch } from 'react-icons/bi'


interface NavItemProps {
    href: string
    label?: string
    icon?: 'search'
}

const NavItem = ({ href, label, icon }: NavItemProps) => {
    const pathname = usePathname()
    const isActive = pathname === href

    return (
        <Link href={href}>
            <span
                className={`flex items-center text-base justify-center gap-1 px-3 py-1 rounded-md transition
                       ${isActive
                        ? 'text-[#532F82] font-bold'
                        : 'text-gray-600 border-transparent'
                    }
                     hover:text-[#532F82] `}
            >
                {icon === 'search' && <BiSearch size={24} />}
                {label && <span>{label}</span>}
            </span>
        </Link>
    )
}

export default NavItem
