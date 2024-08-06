import Carousel from '@/components/carousel'
import Hero from '@/components/hero'
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
        <Hero />
        
        <section>
            <div>Hellow</div>
        </section>
    </>
    
  )
}
