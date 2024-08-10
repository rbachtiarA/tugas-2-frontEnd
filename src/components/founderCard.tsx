import Image from 'next/image'
import React from 'react'

export default function FounderCard({ name, position, image, comment}: { name:string, position:string, image:string, comment:string }) {
  return (
    <div className='flex odd:bg-[#838b66] md:even:flex-row-reverse md:odd:flex-row py-4 flex-col justify-center items-center md:justify-normal'>
        <div className='flex flex-col md:w-1/2 justify-center items-center'>
            <div className='text-center'>
                <h1 className='text-2xl font-bold'>{name}</h1>
                <h2 className='text-md font-semibold'>{position}</h2>        
            </div>
            <p className='text-center'>
                <span className='text-xl'>&quot;</span>
                {comment}
                <span className='text-xl'>&quot;</span>
            </p>
        </div>

        <div className='md:w-1/2 p-2 md:p-0'>
            <Image 
            src={image}
            alt={name}
            width={0}
            height={0}
            sizes='100vw'
            style={{width:'100%', height:'auto'}}            
            />
        </div>
    </div>
  )
}
