"use client"

import { Button } from "@/components/button"
import { Image } from "@/components/image"

const Apple = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
    <g clipPath="url(#a)">
      <path d="M0 0h18v18H0V0Z" />
      <path
        fill="#fff"
        d="M12.615 10.597a4.92 4.92 0 0 1-.645 1.287c-.256.363-.466.614-.626.753-.25.23-.518.347-.805.353-.206 0-.455-.059-.744-.177a2.135 2.135 0 0 0-.8-.176c-.255 0-.529.058-.822.176-.294.118-.531.18-.712.186-.274.012-.55-.108-.823-.362-.175-.151-.393-.412-.655-.78a5.383 5.383 0 0 1-.693-1.37A4.991 4.991 0 0 1 5 8.857c0-.603.131-1.124.393-1.56a2.36 2.36 0 0 1 .829-.832c.338-.2.72-.306 1.107-.31.22 0 .506.068.862.2.355.133.582.2.682.2.076 0 .329-.079.758-.236.406-.145.75-.205 1.03-.182.76.062 1.332.36 1.712.898-.68.41-1.017.985-1.01 1.722.006.574.215 1.053.626 1.432.187.176.395.312.626.409v-.001ZM10.702 4c.006.06.01.12.01.18 0 .45-.166.87-.495 1.26-.397.462-.878.73-1.4.687a1.391 1.391 0 0 1-.01-.17c0-.433.19-.895.524-1.273.168-.192.381-.35.639-.478A1.93 1.93 0 0 1 10.702 4Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
)

const Home = () => {
  return (
    <main className="h-screen">
      <section className="flex flex-col h-full justify-between px-6 py-12">
        <h1 className="text-4xl font-semibold">
          Welcome to <br /> Hidup Sehat!
        </h1>
        <div className="flex flex-col gap-2">
          <Button>
            Connect with
            <Image
              src="/brand/strava.png"
              alt="Google Login"
              className="ml-1.5 h-[42px] w-[42px]"
            />
          </Button>
          <Button>Connect with Apple</Button>
        </div>
      </section>
    </main>
  )
}

export default Home
