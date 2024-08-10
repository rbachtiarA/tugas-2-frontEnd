import CompanyTimeline from '@/components/companyTimeline'
import MissionVision from '@/components/missionVision'


export const metadata = {
  title: 'Essential Nature | About Us',
  description: 'Essential Nature is company that produce essential oil as aromatheraphy product'
}
export default function page() {
  return (
    <section className=''>
      
      <MissionVision />
      <CompanyTimeline />
    </section>
  )
}
