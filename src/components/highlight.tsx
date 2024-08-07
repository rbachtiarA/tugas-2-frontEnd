import { Roboto, Roboto_Flex } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

function handleClassDiv():string {

    return 'w-[150px] md:w-[200px] md:p-4 bg-zinc-500/50 backdrop-blur-sm text-center rounded-xl shadow-xl'
}

function handleClassH1():string {

    return 'text-sm sm:text-2xl md:text-4xl lg:text-6xl font-bold text-white drop-shadow-xl'
}
function handleClassH2():string {

    return 'text-sm sm:text-lg md:text-2xl lg:text-3xl font-semibold text-white drop-shadow-xl'
}

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

        <div className={`${roboto.className} absolute p-8 w-full top-0 lg:top-[40%] flex flex-wrap justify-around items-center gap-2`}>
            <div className={handleClassDiv()}>
                <h1 className={handleClassH1()}>10+</h1>
                <h2 className={handleClassH2()}>Production Site</h2>
            </div>
            <div className={handleClassDiv()}>
                <h1 className={handleClassH1()}>400+</h1>
                <h2 className={handleClassH2()}>Distributed Store</h2>
            </div>
            <div className={handleClassDiv()}>
                <h1 className={handleClassH1()}>10+</h1>
                <h2 className={handleClassH2()}>Export Countries</h2>
            </div>
            <div className={handleClassDiv()}>
                <h1 className={handleClassH1()}>20+</h1>
                <h2 className={handleClassH2()}>Products Variant</h2>
            </div>


        </div>
    </div>
  )
}
