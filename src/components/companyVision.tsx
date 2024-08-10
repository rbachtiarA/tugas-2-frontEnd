import Image from 'next/image'
import React from 'react'

export default function CompanyVision() {
  return (
    <div className='flex w-full'>
        <div className='w-1/2'>
            <h1>Our Vision</h1>
            <p>To be a leading company who produce essential oil</p>
        </div>
      <Image 
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
