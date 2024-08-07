import React from 'react'
import StarGlow from './starGlow'
import StarNotGlow from './starNotGlow'

export default function Rating({ star }: any) {
    const indices = []
    for(let i = 0;i < 5;i++) {
        i < star ? indices.push(true) : indices.push(false)
    }
    let label = '';

    switch (star) {
        case 5:
            label = 'Popular Product !'
            break;
        case 4:
            label = 'Excellent Product !'
            break;
        case 3:
            label = 'Good Product !'
            break;
        default:
            label = 'Try our product !'
            break;
    }
  return (
    <div className='flex flex-col'>
        <div className='flex'>
            {indices.map((val, idx) => {
                return val ? <StarGlow key={idx} size={16}/> : <StarNotGlow key={idx} size={16}/>
            })}
        </div>

        <div className='italic text-zinc-500 text-sm'>
            {label}
        </div>
    </div>
  )
}
