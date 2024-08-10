import { Monsieur_La_Doulaise, Montserrat, Titillium_Web } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
const tw = Titillium_Web({
    weight: "400",
    subsets: ["latin"]
})
export default function CompanyVision() {
  return (
    <div className='flex w-full py-2'>
        <div className={`${tw.className} w-1/2 text-center my-auto`}>
            <h1 className={`text-3xl font-semibold`}>Our Vision</h1>
            <p>To be a leading company who produce essential oil with passion and high quality. Ensuring safety the use of essential oil and discovering more benefit of nature.</p>
        </div>
      <Image 
      className='object-cover md:object-fill object-right'
      src={'/vision_splash.jpg'}
      alt='gardener tending garden'
      width={0}
      height={0}
      sizes='100vw'
      style={{width: '50%', height: 'auto'}}
      />
    </div>
  )
}
