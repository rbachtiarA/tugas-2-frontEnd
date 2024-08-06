import ProductCard from '@/components/productCard'
import React from 'react'
import resolveResponse from 'contentful-resolve-response';

const _API = {
      BASE: 'https://cdn.contentful.com',
      ID: 'ng3z32cq24jy',
      TOKEN: '9zlCpeoGqISPt0RqQfpGYN1DvJhLk8h8OQnIJCYtkjY'
}

async function getProductData() {
  const res = await fetch(`${_API.BASE}/spaces/${_API.ID}/environments/master/entries?access_token=${_API.TOKEN}&content_type=product`, {next :{ revalidate: 100}})
  const data = await res.json()
  
  const response = {
    items: data.items,
    includes: data.includes
  }

  const items = resolveResponse(response)
  
  return items
} 

export default async function page() {

  const data = await getProductData()
  
  return (
    <section className='pt-[100px] md:pt-[120px] pb-16 h-full'>
      <div className='flex flex-wrap w-4/5 mx-auto gap-4 items-center'>
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
