import Image from 'next/image'
import React from 'react'

export default function StarGlow({ size }: any) {
    return (
        <Image 
        src={'/starGlow.svg'}
        alt='Star'
        width={16}
        height={16} />
    )
}
