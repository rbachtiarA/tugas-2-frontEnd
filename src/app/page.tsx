import Carousel from '@/components/carousel'
import CompanyTimeline from '@/components/companyTimeline'
import Hero from '@/components/hero'
import Highlight from '@/components/highlight'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import React from 'react'


export const metadata = {
  title: 'Essential Nature | Home',
  description: 'Producer of Essentials Oil'
}

const montserrat = Montserrat({
    weight: '400',
    subsets:['latin']
})
export default function page() {
  return (
    <>
        <Hero />
        <Highlight />
    </>
    
  )
}
