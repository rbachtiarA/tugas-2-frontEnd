import { getProductDataBySlug } from '@/components/product'
import React from 'react'

export default async function page({ params }: {params: { slug: string}}) {

  const data: ContentfulProduct = await getProductDataBySlug(params.slug)
  
  return (
    <div className='pt-[70px] md:pt-[92px]'>
        {data.fields.name}
    </div>
  )
}
