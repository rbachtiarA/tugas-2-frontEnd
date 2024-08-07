import Image from "next/image";

export default function StarNotGlow({ size }: any) {
    return (
        <Image
        src={'/starNotGlow.svg'}
        alt="blank star"
        width={size}
        height={size} />
    )
}