'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import LogoBrand from './logo/logoBrand'
import Logo from './logo/logo'
import { usePathname } from 'next/navigation'
import LogoComplete from './logo/logoComplete'


export default function Navbar() {
    const pathName = usePathname();
    const navHamburger = useRef(null)
    const handleHamburger = (e: any) => {
        e.current.hidden = !e.current.hidden
        e.current.classList.toggle('left-10')
    }

    const handleActiveLinkDesktop = (pathRef: string) => {
        return `font-semibold py-2 lg:py-3 transition first:rounded-bl-full first:rounded-tl-full last:rounded-tr-full last:rounded-br-full
        [&_p]:px-4 lg:[&_p]:px-6 [&_p]:border-r-2 [&_p]:border-gray-500 [&_p]:hover:underline [&_p]:hover:underline-offset-4 [&_p]:hover:decoration-2 [&_p]:hover:decoration-black
        [&_p]:first:pl-6 lg:[&_p]:first:pl-8 [&_p]:last:pr-6 lg:[&_p]:last:pr-8 [&_p]:last:border-r-0  
        ${pathRef === pathName? 'underline underline-offset-4 decoration-2' : ''}`
    }   

    const handleActiveLinkMobile = (pathRef: string) => {
        return `p-2 hover:bg-[#77805c] ${pathRef === pathName? 'bg-[#77805c] pointer-events-none' : ''}`
    }

    console.log(pathName);
    
  return (
    <nav className='md:text-lg fixed top-0 w-full h-auto md:p-5 z-50  bg-[rgb(181,193,142)]/50 shadow-md backdrop-blur-sm'>
        
        <div className='hidden md:flex justify-between items-center'>
            <Link href={'/'}>
                <LogoComplete />
            </Link>
            <div className='flex rounded-full divide-gray-400 bg-gray-100/50'>
                <Link className={`${handleActiveLinkDesktop('/')}`} href={'/'}>
                    <p>Home</p>
                </Link>
                <Link className={`${handleActiveLinkDesktop('/about')}`} href={'/about'}>
                    <p>About Us</p>
                </Link>
                <Link className={`${handleActiveLinkDesktop('/products')}`} href={'/products'}>
                    <p>Products</p>
                </Link>
                <Link className={`${handleActiveLinkDesktop('/team')}`} href={'/team'}>
                    <p>Team</p>
                </Link>
            </div>
            
            <Link href={'/contact'} className='p-3 bg-white rounded-lg shadow-md hover:underline hover:underline-offset-4 hover:decoration-2 hover:shadow-lg font-semibold hover:bg-[#EADBC8]'>
                Join Us Now
            </Link >
        </div>
            
        <div className='md:hidden flex flex-col m-4'>
            <div>
                <div className='flex flex-row justify-between'>
                    <Link href={'/'} className='flex mr-12'>
                        <LogoComplete />
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
                <div className='flex flex-col divide-y-2 divide-[#77805c] p-2'>
                    <Link className={handleActiveLinkMobile('/')} href={'/'}>Home</Link>
                    <Link className={handleActiveLinkMobile('/about')} href={'/about'}>About Us</Link>
                    <Link className={handleActiveLinkMobile('/products')} href={'/products'}>Products</Link>
                    <Link className={handleActiveLinkMobile('/team')} href={'/team'}>Team</Link>
                    <Link href={'/contact'} className='mt-4 w-1/2 mx-auto text-center bg-white rounded-lg shadow-md hover:shadow-lg font-semibold border-none'>
                        Join Us Now
                    </Link>
                </div>
            </div>
        </div>
    </nav>
  )
}
