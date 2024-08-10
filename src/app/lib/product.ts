'use server'
const base_url = process.env.BASE_URL_CONTENTFUL
const space_id = process.env.ID_SPACES
const token = process.env.TOKEN_CONTENTFUL
import resolveResponse from 'contentful-resolve-response'

export async function getProductData() {
    const res = await fetch(`${base_url}/spaces/${space_id}/environments/master/entries?access_token=${token}&content_type=product`, {next :{ revalidate: 100}})
    const data = await res.json()
    
    const response = {
      items: data.items,
      includes: data.includes
    }
  
    const items = resolveResponse(response)
    
    return items
} 

export async function getProductDataBySlug(slug:string) {
  const res = await fetch(`${base_url}/spaces/${space_id}/environments/master/entries?access_token=${token}&content_type=product&fields.slug=${slug}`, {next :{ revalidate: 100}})
  const data = await res.json()
  
  const response = {
    items: data.items,
    includes: data.includes
  }

  const items = resolveResponse(response)
  
  return items[0]
} 

export async function getProductDataByRating(rating:number) {
  const res = await fetch(`${base_url}/spaces/${space_id}/environments/master/entries?access_token=${token}&content_type=product&fields.rating=${rating}`, {next :{ revalidate: 100}})
  const data = await res.json()
  
  const response = {
    items: data.items,
    includes: data.includes
  }

  const items = resolveResponse(response)
  
  return items
}