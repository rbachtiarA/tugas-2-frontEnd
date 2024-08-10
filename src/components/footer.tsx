import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LogoComplete from './logo/logoComplete'

export default function Footer() {
  return (
    <footer className='w-full h-full bg-[#C7B7A3]'>
        <div className='grid grid-cols-2 md:grid-cols-5 p-4 gap-4'>
          <div className='col-span-2 md:col-span-1'>
            <LogoComplete />
          </div>
          
          <div>
            <strong>About Us</strong>
            <ul>
              <li>
                <Link href={'/about'} className='hover:underline'>Our Vision</Link>
              </li>
            </ul>
          </div>
          <div>
            <strong>Product</strong>
            <ul>
              <li>
                <Link href={'/product'} className='hover:underline'>Essential Oils</Link>
              </li>
            </ul>
          </div>
          <div>
            <strong>Teams</strong>
            <ul className=''>
              <li>
                <Link href={'/team#Marketing'} className='hover:underline'>Marketing</Link>
              </li>
              <li>
                <Link href={'/team#Research & Development'} className='hover:underline'>Research & Development</Link>
              </li>
              <li>
                <Link href={'/team#Production'} className='hover:underline'>Production</Link>
              </li>
              <li>
                <Link href={'/team#Warehouse'} className='hover:underline'>Warehouse</Link>
              </li>
            </ul>
          </div>
          <div className='col-span-2 md:col-span-1'>
            <strong>Let&apos;s stay in touch</strong>
            <p>Sign up for exclusive offers, original stories, events and more.</p>
            <div className='flex items-center m-1'>
              <input type="text" placeholder='Email Address' className='w-1/2 md:w-full'/>
              <button type='submit' className='bg-white peer-focus:border-2 peer-focus:border-l-0 border-black '>
                <Image
                src={'/submit-arrow.svg'}
                alt='submit'
                width={0}
                height={0}
                sizes='100vw'
                style={{width: '32px', height: 'auto'}}
                />
              </button>
          </div>
            
          <div className='flex flex-col'>
            <strong>Follow Us</strong>
            <div className='flex gap-2'>
              <Link href={'https://instagram.com'} target='_blank'>
                <Image
                src={'/instagram.svg'}
                alt='instaIcon'
                width={32}
                height={32}
                />
              </Link>
              <Link href={'https://facebook.com'} target='_blank'>
                <Image
                src={'/facebook.svg'}
                alt='fbIcon'
                width={32}
                height={32}
                />
              </Link>
              <Link href={'https://x.com'} target='_blank'>
                <Image
                src={'/Xtwitter.svg'}
                alt='xIcon'
                width={32}
                height={32}
                />
              </Link>
            </div>

            <div>
              <Link href={'/reference'}>
                Reference Materials
              </Link>
            </div>
          </div>
        </div>
        
        
        
        </div>
    </footer>
  )
}
