import { FC } from "react";
import Image from "next/image";

const Salutation: FC = () => {
  return (
    <section className="flex items-center">
      <div className="flex-1">
        <p className="text-lg font-normal leading-none">Hi,</p>
        <p className="text-2xl font-semibold leading-none mt-1">
          Vincent Suryakim!
        </p>
      </div>
      <div className="rounded-full shrink-0 h-14 aspect-square relative overflow-hidden">
        <Image
          src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
          alt="Profile picture"
          className="object-cover"
          fill
        />
      </div>
    </section>
  );
};

export default Salutation;
