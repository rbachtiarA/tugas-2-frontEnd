import convertMoney from '@/app/lib/moneyChanger'
import Image from 'next/image'
import Link from 'next/link'
import Rating from './rating'

export default function ProductCardMini({ product }: { product:ContentfulProduct }) {    
  return (
    <div className='flex flex-col justify-between gap-4 w-[200px]  p-4'>
        
        <div className='group shadow-lg w-[150px] h-[200px] bg-zinc-300 rounded-xl'>
            <div className="rounded-xl" style={{background: `url(https:${product.fields.sideImage.fields.file.url})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                <Image
                src={`https:${product.fields.image.fields.file.url}`}
                alt={product.fields.name}
                width={0}
                height={0}
                sizes='100vw'
                style={{width: '100%', height:'auto'}}
                className={`${product.fields.bgColor} rounded-xl transition duration-300 group-hover:opacity-0`}
                />
            </div>
        </div>

        <div className=''>
            <strong>{product.fields.name}</strong>
        </div>

        <Rating star={product.fields.rating} />
        

        <div className='text-sm italic text-right'>
            <p>Price: <span>{convertMoney(product.fields.price)}</span></p>
        </div>

        <div className='flex justify-end mt-5'>
            <Link href={`/products/${product.fields.slug}`} className="flex w-[130px] py-2 pl-5 md:hover:pl-3 bg-[#d1dfa4] transform duration-300 rounded-2xl active:bg-[#5e6449] group"> 
                <span className='font-semibold md:after:opacity-0 md:after:content-["_→"] md:after:text-right md:group-hover:after:opacity-100 transition duration-300'>See details</span>
                
            </Link>
            
        </div>
</div>
  )
}
