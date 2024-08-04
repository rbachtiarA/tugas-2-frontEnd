'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import LogoBrand from './logo/logoBrand'
import Logo from './logo/logo'




export default function Navbar() {

    const navHamburger = useRef(null)
    const handleHamburger = (e: any) => {
        e.current.hidden = !e.current.hidden
        e.current.classList.toggle('left-10')
    }

    const linkClassName = () => {
        return 'font-semibold p-3 rounded-lg hover:bg-[#89926b] hover:shadow-md transition'
    }
    
  return (
    <nav className='fixed top-0 w-full h-auto p-5 z-50  bg-[rgb(181,193,142)]/70 shadow-md backdrop-blur-sm'>
        
        <div className='hidden md:flex justify-around items-center'>
            <Link href={'/'} className='flex gap-4'>
                <Logo />
                <LogoBrand />
            </Link>
            <div >
                <Link className={linkClassName()} href={'/'}>Home</Link>
                <Link className={linkClassName()} href={'/about'}>About Us</Link>
                <Link className={linkClassName()} href={'/products'}>Products</Link>
                <Link className={linkClassName()} href={'/team'}>Team</Link>
            </div>
            
            <button className='p-3 bg-white rounded-lg shadow-md hover:underline hover:decoration-2 hover:shadow-lg font-semibold transform- hover:w-1/2'>
                Join Us Now
            </button>
        </div>
            
        <div className='md:hidden flex flex-col'>
            <div>
                <div className='flex flex-row justify-between'>
                    <Link href={'/'} className='flex mr-12 gap-4'>
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
                    <button className='m-3 w-1/2 mx-auto bg-white rounded-lg shadow-md hover:shadow-lg font-semibold'>
                        Join Us Now
                    </button>
                </div>
            </div>
        </div>
    </nav>
  )
}
