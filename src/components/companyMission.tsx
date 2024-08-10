import { Titillium_Web } from 'next/font/google'
import Image from 'next/image'
import React from 'react'



export default function CompanyMission() {
  return (
    <div className='flex w-full py-2'>
      <Image 
      className='object-cover md:object-fill object-right'
      src={'/mission_splash.jpg'}
      alt='gardener tending garden'
      width={0}
      height={0}
      sizes='100vw'
      style={{width: '50%', height: 'auto'}}
      />
        <div className={`${tw.className} w-1/2 text-center my-auto`}>
            <h1 className={`text-3xl font-semibold`}>Our Mission</h1>
            <p>Expand company and store to national wide, to make more accessible for more customer. Giving knowledge how to treat our nature and importance of nature for our living and wellness</p>
        </div>
    </div>
  )
}
