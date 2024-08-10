import CompanyVideo from '@/components/CompanyVideo'
import Founder from '@/components/founder'
import Hero from '@/components/hero'
import Highlight from '@/components/highlight'
import ProductPopular from '@/components/productPopular'
import ReviewCard from '@/components/reviewCard'
import { Suspense } from 'react'
import Loading from './loading'


export const metadata = {
  title: 'Essential Nature | Home',
  description: 'Producer of Essentials Oil'
}

export default function page() {
  return (
    <>
        <Hero />
        <Highlight />
        <Suspense fallback={<Loading />}>
          <Founder />
          <CompanyVideo />
        </Suspense>
        
        <ProductPopular />
        <ReviewCard />
    </>
    
  )
}
