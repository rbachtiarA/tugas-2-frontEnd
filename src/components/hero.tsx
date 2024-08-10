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

            <div className='relative w-full'>
                <Image
                src={'/pexels-mareefe-672051.jpg'}
                alt='Arranged Vial of Essential Oil'
                width={0}
                height={0}
                sizes='100%'
                style={{width: '100%', height: '100vh', objectFit: 'cover'}}
                priority
                />

                <div className='absolute top-[5%] left-0 h-100vh w-full md:w-2/5'>
                    <div className='rounded-lg bg-black bg-opacity-40 backdrop-blur-sm p-5 '>
                        <div className='text-xl md:text-2xl lg:text-3xl font-extrabold text-white' >
                            The Most <span className='box-decoration-clone md:block text-transparent bg-gradient-to-br from-gray-200 to-[#FFDE4D] bg-clip-text'>Reliable & Quality Product Aromatic Oils </span> In Indonesia
                        </div>

                        <div className='text-white mt-5'>
                            <p><strong className='text-transparent bg-gradient-to-br from-gray-200 to-[#FFDE4D] bg-clip-text'>Essential Nature</strong> has been become producer of essential oil since 2000 and already have 12 Production site and 400+ supply chain store across sabang to merauke in indonesia.</p>
                        </div>

                        <div className='flex justify-end mt-5'>
                            <Link href={'/products'} className="flex w-[190px] py-2 pl-8 md:hover:pl-5 bg-[#d1dfa4] transform duration-300 rounded-2xl active:bg-[#5e6449] group"> 
                                <span className='font-semibold md:after:opacity-0 md:after:content-["_→"] md:after:text-right md:group-hover:after:opacity-100 transition duration-300'>See Our Product</span>
                                
                            </Link>
                            
                        </div>
                    </div>

                </div>
            </div>
        </section>
  )
}
