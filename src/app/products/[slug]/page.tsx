
import { getProductDataBySlug } from '@/app/lib/product'
import Image from 'next/image'
import React from 'react'

export default async function page({ params }: {params: { slug: string}}) {

  const data: ContentfulProduct = await getProductDataBySlug(params.slug)
  
  return (
    <div className='pt-[70px] md:pt-[92px]'>

      <div className='flex flex-row'>
        <div className='w-1/2'>
          <div>
            {data.fields.name}
          </div>

          <div>
            {data.fields.description}
          </div>

          <div>
            
          </div>
        </div>

        <div className='w-1/2'>
          <Image 
          src={`https:${data.fields.sideImage.fields.file.url}`}
          alt={data.fields.name}
          width={0}
          height={0}
          sizes='100vw'
          style={{width: '100%', height: 'auto'}}
          priority
          />
        </div>
    
      </div>
    </div>
  )
}
