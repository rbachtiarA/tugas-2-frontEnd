import LogoBrand from './logoBrand'
import Logo from './logo'

export default function LogoComplete() {
  return (
    <div className='flex items-center gap-4'>
            <Logo />
            <LogoBrand />
    </div>
  )
}
