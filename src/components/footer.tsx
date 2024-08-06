import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LogoComplete from './logo/logoComplete'

export default function Footer() {
  return (
    <footer className='flex flex-wrap p-8 gap-8 justify-around w-full bg-[#C7B7A3]'>
        <div>
          <LogoComplete />
        </div>
        
        <div>
          <strong>About Us</strong>
        </div>
        <div>
          <strong>Product</strong>

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

        <div>
          <div>
            <strong>Let&apos;s stay in touch</strong>
            <p>Sign up for exclusive offers, original stories, events and more.</p>
            <div className='flex items-center box-content m-1'>
              <input type="text" placeholder='Email Address' className='peer outline-none py-1 px-1 focus:border-2 focus:border-r-0 border-black '/>
              <button type='submit' className='bg-white peer-focus:border-2 peer-focus:border-l-0 border-black '>
                <Image
                src={'/submit-arrow.svg'}
                alt='submit'
                width={32}
                height={32}
                />
              </button>
            </div>
          </div>


          <div>
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
              <Link href={'/ref'}>
                Reference Materials
              </Link>
            </div>
          </div>
        </div>
    </footer>
  )
}
