import Carousel from '@/components/carousel'
import CompanyTimeline from '@/components/companyTimeline'
import CompanyVideo from '@/components/CompanyVideo'
import Founder from '@/components/Founder'
import Hero from '@/components/hero'
import Highlight from '@/components/highlight'
import ProductPopular from '@/components/productPopular'
import ReviewCard from '@/components/reviewCard'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import React from 'react'


export const metadata = {
  title: 'Essential Nature | Home',
  description: 'Producer of Essentials Oil'
}

export default function page() {
  return (
    <>
        <Hero />
        <Highlight />
        <Founder />
        <CompanyVideo />
        <ProductPopular />
        <ReviewCard />
    </>
    
  )
}
