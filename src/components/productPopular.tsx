import { getProductDataByRating } from '@/app/lib/product'
import React from 'react'
import ProductCardMini from './productCardMini'
import Link from 'next/link'

export default async function ProductPopular() {

    const data = await getProductDataByRating(5)
    
  return (
    <div className='overflow-hidden py-4'>
        <div className='flex justify-between items-center px-2'>
            <h1 className='font-semibold text-2xl'>Our Popular Product</h1>
            <button className='bg-white px-2 py-1 rounded-full hover:bg-black hover:text-white'>
                <Link href={'/products'}>
                    See All..
                </Link>
            </button>
        </div>
        <div className='flex overflow-y-scroll md:overflow-hidden'>
        {data.map((item: ContentfulProduct) => (
            <ProductCardMini key={item.sys.id} product={item}/>
        ))}
        </div>
    </div>
  )
}
