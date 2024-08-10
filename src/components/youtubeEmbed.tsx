'use client'
import Image from "next/image"
import { useRef } from "react"

export default function YoutubeEmbed({ link, title, staticImg }: { link: string, title: string, staticImg:string }) {
  const useBtn = useRef(null)
  const handleOnClick = () => {
    const node = `<iframe 
        width="100%" height="215" 
        src=${link} 
        loading="lazy"
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        />`
    useBtn.current.innerHTML = node
  }  
  return (
    <div className='flex flex-col items-center justify-end w-[300px] md:w-[360px]'>
        <h1 className='font-bold mb-2'>{title}</h1>
        <div ref={useBtn} className="h-[215px]">
          <button onClick={handleOnClick}>
            <Image
            src={staticImg}
            alt={title}
            width={0}
            height={0}
            sizes="100vw"
            style={{width: '100%', height: '100%'}}
            />
          </button>
        </div>
        
    </div>
  )
}
