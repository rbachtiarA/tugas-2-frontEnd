import Image from 'next/image'
import React from 'react'

export default function EmployeeCard({id, name, picture, country}: EmployeeData) {
  return (
    <div key={id} className='flex flex-col max-w-[300px] justify-end items-center rounded-lg p-4 pt-2 bg-zinc-600/30 gap-4'>
        <h2 className='text-lg w-[128px] text-center font-semibold'>
            {name}
        </h2>

        <Image
        className='rounded-lg' 
        src={picture}
        alt={name}
        width={128}
        height={128}
        />

        <strong className='text-sm'>
            {country}
        </strong>
    </div>
  )
}
