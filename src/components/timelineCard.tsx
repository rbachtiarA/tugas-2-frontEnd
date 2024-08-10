import Image from 'next/image'
import React from 'react'

export default function TimelineCard({label, date, content, image}: TimelineCardData) {
  return (
    <li className="py-2 relative mb-6 sm:mb-0">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-[rgb(181,193,142)] rounded-full ring-0 ring-white/50 dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg className="w-2.5 h-2.5 text-[#717958] dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div className="hidden sm:flex w-full bg-[rgb(181,193,142)] h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className='xl:h-[450px] lg:flex xl:flex-col xl:justify-between'>
            <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{label}</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{date}</time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">{content}</p>
            </div>
            <div className='w-[300px] mx-auto lg:mx-0 bg-zinc-500'>
                <Image
                src={image.link}
                alt={image.label}
                width={128}
                height={128}
                sizes='100vw'
                style={{width: '100%', height: 'auto', objectFit: 'cover'}}
                />
            </div>
        </div>
    </li>
  )
}
