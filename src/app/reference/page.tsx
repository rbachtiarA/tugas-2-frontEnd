import Link from 'next/link'
export default function page() {
  return (
    <div className='pt-[92px] h-[calc(100vh-234px)]'>
        reference List :
      <ul>
        <li>Products and Website design Idea: <Link className='underline text-blue-500 hover:text-blue-800' href={`https://www.aromatics.com/`}>Aromatic International</Link></li>
      </ul>
    </div>
  )
}
