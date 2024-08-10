import YoutubeEmbed from './youtubeEmbed'
import { Titillium_Web } from 'next/font/google'

const tw = Titillium_Web({
  weight: "400",
  subsets: ["latin"]
})

export default function CompanyVideo() {
  return (
    <div className={`flex flex-wrap justify-center gap-8 p-4 bg-[#838b66] text-white ${tw.className}`}>
      <YoutubeEmbed 
      link="https://www.youtube.com/embed/lYm6pQU6bEE?si=ImdPK7UN4TKpRBQQ" 
      title="How our company produce essential oil" />
      <YoutubeEmbed 
      link="https://www.youtube.com/embed/ORISJjsCEro?si=l_V6E83vUP7tT14Y" 
      title="How to use our product properly" />
    </div>
  )
}
