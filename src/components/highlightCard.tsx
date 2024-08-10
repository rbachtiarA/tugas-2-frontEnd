import React from 'react'

export default function HighlightCard({ quantity, label }: { quantity:number, label: string }) {
  return (
    <div className="w-[150px] md:w-[200px] md:p-4 bg-zinc-500/50 backdrop-blur-sm text-center rounded-xl shadow-xl">
        <h1 className="text-sm sm:text-2xl md:text-4xl lg:text-6xl font-bold text-white drop-shadow-xl">{quantity}+</h1>
        <h2 className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-semibold text-white drop-shadow-xl">{label}</h2>
    </div>
  )
}
