import convertMoney from '@/app/lib/moneyChanger'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductCard(data: ProductData) {
    const bg = 'lemon'
  return (
    <div className='flex flex-col justify-between gap-4 w-[330px] bg-zinc-500/50 p-4'>
        <div className='text-center'>
            <strong>{data.product.name}</strong>
        </div>

        <Image 
        src={`https:${data.product.images}`}
        alt={data.product.name}
        width={0}
        height={0}
        sizes='100vw'
        style={{width: '100%', height:'auto'}}
        className={`${data.product.bgColor} rounded-xl`}
        />

        <div className='group flex flex-wrap gap-2'>
            {data.product.tags.map((tag) => (
                <p className='py-1 px-2 rounded-full bg-lime-700 text-white'>{tag}</p>
            ))}
        </div>

        <div>
            <p>Price: <span>{convertMoney(data.product.price)}</span></p>
        </div>

        <div className='flex justify-end mt-5'>
            <Link href={`/products/${data.product.slug}`} className="flex w-[130px] py-2 pl-5 md:hover:pl-3 bg-[#d1dfa4] transform duration-300 rounded-2xl active:bg-[#5e6449] group"> 
                <span className='font-semibold md:after:opacity-0 md:after:content-["_→"] md:after:text-right md:group-hover:after:opacity-100 transition duration-300'>See details</span>
                
            </Link>
            
        </div>
</div>
  )
}
