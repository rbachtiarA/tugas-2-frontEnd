import Image from 'next/image'

export default function Logo() {
  return (
    <div>
        <Image
        src={"/logo-brand.svg"}
        alt='Brand Logo'
        width={28}
        height={28}
        priority
        />
      </div>
  )
}
