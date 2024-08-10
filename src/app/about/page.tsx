import Carousel from '@/components/carousel'
import CompanyTimeline from '@/components/companyTimeline'
import CompanyVision from '@/components/companyVision'
import React from 'react'

export default function page() {
  return (
    <section className=''>
      <CompanyTimeline />
      <CompanyVision />
    </section>
  )
}
