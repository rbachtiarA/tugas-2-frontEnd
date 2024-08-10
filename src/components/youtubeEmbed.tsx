import React from 'react'

export default function YoutubeEmbed({ link, title }: { link: string, title: string }) {
  return (
    <div className='flex flex-col items-center justify-end w-[300px] md:w-[360px]'>
        <h1 className='font-bold mb-2'>{title}</h1>
        <iframe 
        width="100%" height="215" 
        src={link} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        />
    </div>
  )
}
