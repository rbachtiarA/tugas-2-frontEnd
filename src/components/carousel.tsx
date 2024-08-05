'use client'
import React from 'react'

export default function Carousel() {
  return (
    <div id='carousel'>
        <div id='container' className='flex justify-center items-center max-w-[1920px] w-full mx-auto h-96 bg-black/50'>
            <div className='shadow-lg shadow-zinc-500 basis-0 cursor-pointer'>
                <div className='w-[900px] h-full bg-purple-400'>Slide 1</div>
            </div>
            <div className='shadow-lg shadow-zinc-500 basis-0 cursor-pointer'>
                <div className='w-[900px] h-full bg-teal-400'>Slide 2</div>
            </div>
            <div className='shadow-lg shadow-zinc-500 basis-0 cursor-pointer'>
                <div className='w-[900px] h-full bg-pink-400'>Slide 3</div>
            </div>
            <div className='shadow-lg shadow-zinc-500 basis-0 cursor-pointer'>
                <div className='w-[900px] h-full bg-yellow-400'>Slide 4</div>
            </div>
        </div>
    </div>
  )
}
