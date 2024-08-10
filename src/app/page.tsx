import CompanyVideo from '@/components/CompanyVideo'
import Founder from '@/components/founder'
import Hero from '@/components/hero'
import Highlight from '@/components/highlight'
import ProductPopular from '@/components/productPopular'
import ReviewCard from '@/components/reviewCard'


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
