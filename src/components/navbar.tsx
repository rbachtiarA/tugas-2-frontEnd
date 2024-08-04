'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import LogoBrand from './logo/logoBrand'
import Logo from './logo/logo'
import { usePathname } from 'next/navigation'


export default function Navbar() {
    const pathName = usePathname();
    const navHamburger = useRef(null)
    const handleHamburger = (e: any) => {
        e.current.hidden = !e.current.hidden
        e.current.classList.toggle('left-10')
    }

    const linkClassName = () => {
        return `font-semibold py-2 lg:py-3 transition first:rounded-bl-full first:rounded-tl-full last:rounded-tr-full last:rounded-br-full
        [&_p]:px-4 lg:[&_p]:px-6 [&_p]:border-r-2 [&_p]:border-gray-500 [&_p]:hover:underline [&_p]:hover:underline-offset-4 [&_p]:hover:decoration-2 [&_p]:hover:decoration-black
        [&_p]:first:pl-6 lg:[&_p]:first:pl-8 [&_p]:last:pr-6 lg:[&_p]:last:pr-8 [&_p]:last:border-r-0`
    }

    const bgBlack = () => {
        return `bg-black`
    }

    const handleActiveLink = (pathRef: string) => {
        return pathRef === pathName? 'underline underline-offset-4 decoration-2 pointer-events-none' : ''
    }   
  return (
    <nav className='md:text-lg fixed top-0 w-full h-auto p-5 z-50  bg-[rgb(181,193,142)]/50 shadow-md backdrop-blur-sm'>
        
        <div className='hidden md:flex justify-around items-center'>
            <Link href={'/'} className='flex gap-4 items-center'>
                <Logo />
                <LogoBrand />
            </Link>
            <div className='flex rounded-full divide-gray-400 bg-gray-100/50'>
                <Link className={`${linkClassName()} ${handleActiveLink('/')}`} href={'/'}>
                    <p>Home</p>
                </Link>
                <Link className={`${linkClassName()} ${handleActiveLink('/about')}`} href={'/about'}>
                    <p>About Us</p>
                </Link>
                <Link className={`${linkClassName()} ${handleActiveLink('/products')}`} href={'/products'}>
                    <p>Products</p>
                </Link>
                <Link className={`${linkClassName()} ${handleActiveLink('/team')}`} href={'/team'}>
                    <p>Team</p>
                </Link>
            </div>
            
            <Link href={'/contact'} className='p-3 bg-white pr- rounded-lg shadow-md hover:underline hover:underline-offset-4 hover:decoration-2 hover:shadow-lg font-semibold hover:bg-[#EADBC8]'>
                Join Us Now
            </Link >
        </div>
            
        <div className='md:hidden flex flex-col'>
            <div>
                <div className='flex flex-row justify-between'>
                    <Link href={'/'} className='flex mr-12 gap-4 items-center'>
                        <LogoBrand />
                        <Logo />
                    </Link>
                    <button onClick={() => handleHamburger(navHamburger)}>
                        <Image 
                        src={"/hamburger-menu.svg"}
                        alt='expand'
                        width={28}
                        height={28}
                        priority
                    />
                    </button>
                </div>
            </div>

            <div className='' ref={navHamburger} hidden>
                <div className='flex flex-col'>
                    <Link className={linkClassName()} href={'/'}>Home</Link>
                    <Link className={linkClassName()} href={'/about'}>About Us</Link>
                    <Link className={linkClassName()} href={'/products'}>Products</Link>
                    <Link className={linkClassName()} href={'/team'}>Team</Link>
                    <Link href={'/contact'} className='m-3 w-1/2 mx-auto text-center bg-white rounded-lg shadow-md hover:shadow-lg font-semibold'>
                        Join Us Now
                    </Link>
                </div>
            </div>
        </div>
    </nav>
  )
}
