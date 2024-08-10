import { Roboto_Flex } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import HighlightCard from './highlightCard'

const data = [
    {
        quantity: 10,
        label: 'Production Sites'
    },
    {
        quantity: 400,
        label: 'Distributed Store'
    },
    {
        quantity: 10,
        label: 'Export Countries'
    },
    {
        quantity: 20,
        label: 'Products Variant'
    },
]

const roboto = Roboto_Flex({
    weight: '400',
    subsets: ['latin']
})

export default function Highlight() {
  return (
    <div className='relative'>
        <Image 
        src={'/indonesia.svg'}
        alt='indonesia map'
        width={0}
        height={0}
        sizes='100vw'
        style={{width: '100%', height: 'auto'}}
        className='py-5'
        />

        <div className={`${roboto.className} absolute p-8 w-full top-[10%] lg:top-[32%] flex flex-wrap shrink-0 justify-around items-center gap-2`}>
            {data.map((card, idx) => (
                <HighlightCard
                key={idx}
                quantity={card.quantity}
                label={card.label} />
            ))}
        </div>
    </div>
  )
}
