import Carousel from '@/components/carousel'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
const montserrat = Montserrat({
    weight: '400',
    subsets:['latin']
})
export default function page() {
  return (
    <>
        <section id='main' className={montserrat.className}>

            <div className='w-full h-[100vh] opacity-100'>
                <Image
                src={'/pexels-mareefe-672051.jpg'}
                alt='Freepik Image - Mountain'
                width={0}
                height={0}
                sizes='100%'
                style={{width: '100%', height: '100vh', objectFit: 'cover'}}
                priority
                />

                <div className='absolute grid items-center top-0 left-0 w-full h-full'>
                    <div className='rounded-lg bg-black bg-opacity-25 backdrop-blur-sm p-10 md:w-1/3'>
                        <div className='md:text-3xl lg:text-4xl font-extrabold text-white' >
                            The Most <span className='text-transparent md:text-3xl lg:text-5xl bg-gradient-to-br from-gray-200 to-[#FFDE4D] bg-clip-text'>Reliable Distributor Aromatic Oils </span> In Indonesia
                        </div>
                    </div>
                </div>

                <div>
                    
                </div>
            </div>
        </section>

        <section>
            <div>Hellow</div>
        </section>
    </>
    
  )
}
