
import ProductCard from '@/components/productCard'
import React from 'react'
import { getProductData } from '../lib/product';


export default async function page() {

  const data = await getProductData()
  
  return (
    <section className='py-16 h-full flex flex-col justify-center items-center'>
      <h1 className='text-3xl'>Our Products</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center'>
        {data.map((productData:any) =>
          {
              const product:Product = {
                name: productData.fields.name,
                slug: productData.fields.slug,
                images: productData.fields.image.fields.file.url,
                sideImages: productData.fields.sideImage.fields.file.url,
                description: productData.fields.description,
                tags: productData.fields.tags,
                suggest: productData.fields.suggest,
                bgColor: productData.fields.bgColor,
                price: productData.fields.price,
                rating: productData.fields.rating
              };
        
              return <ProductCard key={productData.sys.id} product={product}/>
          }
        )}
      </div>
    </section>
  )
}
