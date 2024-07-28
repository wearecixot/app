import { FC } from "react"
import Image from "next/image"
import Link from "next/link"

const Salutation: FC = () => {
  return (
    <section className="flex items-center px-4">
      <div className="flex-1 text-2xl font-semibold">
        <p className="leading-none">Home</p>
      </div>
      <Link href="/profile">
        <div className="rounded-full shrink-0 h-10 aspect-square relative overflow-hidden">
          <Image
            src="https://pbs.twimg.com/profile_images/899773129412587520/IH7_EA3E_400x400.jpg"
            alt="Profile picture"
            className="object-cover"
            fill
          />
        </div>
      </Link>
    </section>
  )
}

export default Salutation
