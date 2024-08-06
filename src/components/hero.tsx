import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const montserrat = Montserrat({
    weight: '400',
    subsets: ['latin']
})

export default function Hero() {
  return (
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

                <div className='absolute flex items-center top-0 left-0 w-full h-full'>
                    <div className='rounded-lg bg-black bg-opacity-40 backdrop-blur-sm p-10 md:w-2/5'>
                        <div className='text-xl md:text-3xl lg:text-4xl font-extrabold text-white' >
                            The Most <span className='md:block text-transparent md:text-3xl lg:text-5xl bg-gradient-to-br from-gray-200 to-[#FFDE4D] bg-clip-text'>Reliable & Quality Product Aromatic Oils </span> In Indonesia
                        </div>

                        <div className='text-white mt-5'>
                            <p><strong className='text-transparent bg-gradient-to-br from-gray-200 to-[#FFDE4D] bg-clip-text'>Essential Nature</strong> has been become producer of essential oil since 1980 and already have 12 Production site and 400+ supply chain store across sabang to merauke in indonesia.</p>
                        </div>

                        <div className='flex justify-end mt-5'>
                            <Link href={'/products'} className='flex w-[190px] py-2 pl-4 pr-2 bg-[#d1dfa4] rounded-2xl'> 
                                <span className='font-semibold'>See Our Product</span>
                                <Image 
                                className='ml-2'
                                src={'/submit-arrow.svg'}
                                alt='arrow'
                                width={16}
                                height={16}
                                />
                            </Link>
                            
                        </div>
                    </div>

                </div>

                <div>
                    
                </div>
            </div>
        </section>
  )
}
