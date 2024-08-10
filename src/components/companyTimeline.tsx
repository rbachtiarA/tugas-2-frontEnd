import TimelineCard from './timelineCard'


const data = [
    {
        label: 'First Home Industry',
        date: 'Built on August 17, 2000',
        content: 'The first place where our history begin, by 5 enthusiastic people who share same vision. They make extract of essential oil from batch of peppermint leaves, then selling it to local store and local community. with positive respond from buyer, there is a lot of order.',
        image: {
            link: '/home-industry.webp',
            label: 'Oil Extractions Stations',
        }
    },
    {
        label: 'Own Local Store',
        date: 'Built on July 1, 2001',
        content: 'With the success of product, we built our own store to improve our service for our customer. We begin to expand our reach for new customers and challenge with new variants of product flavors.',
        image: {
            link: '/local-store.jpg',
            label: 'Our front Local Store',
        }
    },
    {
        label: 'Export',
        date: 'On March 5, 2005',
        content: 'With expanding our production, store, and partner. We successfully get our attention from neighbour country such as malaysia, singapore, thailand, etc. Our first batch of export product for export goods.',
        image: {
            link: '/export-deal.jpg',
            label: 'Farmer and Businessman make contract',
        }
    },
    {
        label: 'Still Growing',
        date: 'Now',
        content: 'As company who have vision, we still maintain quality and improve from our flaw.  As of now we have 12 production site and total 400+ store including our partner that can be easily to locate.',
        image: {
            link: '/row-building.jpg',
            label: 'Building in row',
        }
    }
]

export default function CompanyTimeline() {
  return (
    <div className='px-4'>
        <div className='mt-8 mb-4 justify-center flex'>
            <h1 className='text-3xl'>Our Company History</h1>
        </div>
        <ol className="items-start xl:flex p-2">
        
            {data.map((timeline, idx) => (
                <TimelineCard
                key={`timeline-${idx}`}
                label={timeline.label}
                date={timeline.date}
                content={timeline.content}
                image={timeline.image}
                />
            ))}
        </ol>
    </div>


  )
}
