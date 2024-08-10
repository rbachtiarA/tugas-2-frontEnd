import { Titillium_Web } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const tw = Titillium_Web({
    weight: "400",
    subsets: ["latin"]
})

export default function MissionVisionCard({ label, description, splashImage, splashImageAlt }: {label:string, description:string, splashImage: string, splashImageAlt: string}) {
  return (
        <div className='flex w-full h-[250px] md:h-[360px] py-2 even:flex-row-reverse even:[&_Image]:object-left odd:[&_Image]:object-right'>
            <Image 
            className='object-cover md:object-fill'
            src={splashImage}
            alt={splashImageAlt}
            width={0}
            height={0}
            sizes='100vw'
            style={{width: '50%', height: 'auto'}}
            />
            <div className={`${tw.className} w-1/2 text-center my-auto p-2`}>
                <h1 className={`text-3xl font-semibold`}>{label}</h1>
                <p>{description}</p>
            </div>
        </div>
  )
}
