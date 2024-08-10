import FounderCard from './founderCard'

const data = [
    {
        name: 'Bambang Goeang',
        position: 'CEO/Founder Essential Nature',
        image: '/bambang-goewang.jpg',
        comment: 'Nature is part of our life. They provide us resource what we need, so we need to take care of them wite care and love. as company we want to maximized what nature give to us for our greater purpose of life.'
    },
    {
        name: 'Wendah Jange',
        position: 'COO Essential Nature',
        image: '/wenda-jahe.jpg',
        comment: 'Essential Nature product are based on nature. We grow them with care without using artificial chemical, organically. Thats why product that came from our company are always high quality and safe.'
    },
]
export default function Founder() {
  return (
    <div>
      {data.map((obj, idx) => (
        <FounderCard
        key={idx} 
        name={obj.name}
        position={obj.position}
        image={obj.image}
        comment={obj.comment}
        />
      ))}
    </div>
  )
}
