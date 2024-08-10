
import { getProductDataBySlug } from '@/app/lib/product'
import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: 'Essential Nature | Product',
  description: 'Product of Essential Nature'
}

export default async function page({ params }: {params: { slug: string}}) {

  const data: ContentfulProduct = await getProductDataBySlug(params.slug)
  
  return (
    <div className=''>

      <div className='flex flex-col-reverse md:flex-row md:h-[400px]'>
        <div className='md:w-1/2'>
          <div className='font-semibold'>
            {data.fields.name}
          </div>

          <div>
            {data.fields.description}
          </div>

          <div>
            
          </div>
        </div>

        <div className='md:w-1/2'>
          <Image 
          src={`https:${data.fields.sideImage.fields.file.url}`}
          alt={data.fields.name}
          width={0}
          height={0}
          sizes='100vw'
          style={{width: '100%', height: '100%', objectFit: 'cover'}}
          priority
          />
        </div>
    
      </div>
    </div>
  )
}
