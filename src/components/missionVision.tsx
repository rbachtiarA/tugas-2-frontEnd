import MissionVisionCard from './missionVisionCard'

const data = [
    {
        label: 'Our Vision',
        description: 'To be a leading company who produce essential oil with passion and high quality. Ensuring safety the use of essential oil and discovering more benefit of nature.',
        splashImage: '/vision_splash.jpg',
        splashImageAlt: 'Gardener tending garden' 
    },
    {
        label: 'Our Mission',
        description: 'Expand company and store to national wide, to make more accessible for more customer. Giving knowledge how to treat our nature and importance of nature for our living and wellness.',
        splashImage: '/mission_splash.jpg',
        splashImageAlt: 'Gardener Inspect garden' 
    },
]

export default function MissionVision() {
  return (
    <div className=''>
      {data.map((obj, idx) => (
        <MissionVisionCard
        key={idx}
        label={obj.label}
        description={obj.description}
        splashImage={obj.splashImage}
        splashImageAlt={obj.splashImageAlt}
        />
      ))}
    </div>
  )
}
