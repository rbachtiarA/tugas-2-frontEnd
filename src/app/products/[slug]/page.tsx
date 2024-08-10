
import convertMoney from '@/app/lib/moneyChanger'
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

          <div className='py-4 text-center text-2xl font-semibold'>
            <h1>
              {data.fields.name}
            </h1>  
          </div>
      <div className='flex flex-col-reverse md:flex-row md:h-full p-4 md:p-0'>
        <div className='md:w-1/2 p-2 flex flex-col gap-4'>

          <div>
            {data.fields.description}
          </div>

          <div>
            <h2 className='font-semibold'>Suggested Used:</h2>
            <ul className='list-disc list-inside *:my-2'>
              {data.fields.suggest.map((suggest, idx) => (
                <li key={idx}>{suggest.replaceAll(';',',')}</li>
              ))}

            </ul>
          </div>

          <div>
            <h2>Price : {convertMoney(data.fields.price)}</h2>
          </div>

          <div>
            <button className='bg-white hover:bg-black hover:text-white px-4 py-2 rounded-full transition'>
              Add to Cart
            </button>
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
