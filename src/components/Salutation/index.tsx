import { FC } from "react"
import Image from "next/image"

const Salutation: FC = () => {
  return (
    <section className="flex items-center px-4">
      <div className="flex-1 text-2xl font-semibold">
        <p className="leading-none">Home</p>
      </div>
      <div className="rounded-full shrink-0 h-10 aspect-square relative overflow-hidden">
        <Image
          src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
          alt="Profile picture"
          className="object-cover"
          fill
        />
      </div>
    </section>
  )
}

export default Salutation
