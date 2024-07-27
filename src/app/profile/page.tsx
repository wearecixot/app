import Layout from "@/components/Layout";
import Image from "next/image";

const Profile = () => {
  return (
    <Layout className="flex flex-col gap-6">
      <div className="flex flex-col items-center">
        <div className="rounded-full text-center overflow-hidden h-24 aspect-square relative">
          <Image
            src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
            alt="Profile picture"
            className="object-cover"
            fill
          />
        </div>
        <p className="mt-4 text-lg font-semibold leading-none">Vincent Suryakim</p>
        <p className="mt-2 text-sm text-gray-500 leading-none">@vincentsuryakim</p>
      </div>
      <div className="flex bg-red-400">
        <p>a</p>
        <p>b</p>
      </div>
    </Layout>
  );
};

export default Profile;
