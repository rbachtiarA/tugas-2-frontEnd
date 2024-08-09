import convertMoney from '@/app/lib/moneyChanger'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Rating from './rating'

export default function ProductCard(data: ProductData) {
    const bg = 'lemon'
  return (
    <div className='flex flex-col justify-between gap-4 w-[330px]  p-4'>
        

        <div className='group shadow-lg w-[298px] h-[433px] bg-zinc-300 rounded-xl'>
            <div className="rounded-xl" style={{background: `url(${data.product.sideImages})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                <Image
                src={`https:${data.product.images}`}
                alt={data.product.name}
                width={0}
                height={0}
                sizes='100vw'
                style={{width: '100%', height:'auto'}}
                className={`${data.product.bgColor} rounded-xl transition duration-300 group-hover:opacity-0`}
                />
            </div>
        </div>

        <div className=''>
            <strong>{data.product.name}</strong>
        </div>
        <div className='group flex flex-wrap gap-2'>
            {data.product.tags.map((tag, idx) => (
                <p key={idx} className='py-1 px-2 rounded-full bg-lime-700 text-white'>{tag}</p>
            ))}
        </div>

        <Rating star={data.product.rating} />
        

        <div className='text-sm italic text-right'>
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
