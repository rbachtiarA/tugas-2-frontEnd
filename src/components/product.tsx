const base_url = process.env.NEXT_PUBLIC_BASE_URL_CONTENTFUL
const space_id = process.env.NEXT_PUBLIC_ID_SPACES
const token = process.env.NEXT_PUBLIC_TOKEN_CONTENTFUL
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