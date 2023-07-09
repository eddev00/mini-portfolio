import Image from "next/image";
import profile from "../../public/profile.png";
import About from "@/components/About";

export default function Home() {
  return (
    <main className=" text-black font-medium px-6 max-w-xl mx-auto flex flex-col gap-8">
      <div className=" text-center  p-3 bg-[#6AFF79]">
        Hey! Welcome To My Portfolio
      </div>
      <div className="  text-white flex flex-wrap justify-center items-center gap-6">
        <div className=" mr-auto flex flex-col gap-2">
          <span className=" text-3xl">Mohamed Baarar</span>

          <p className=" font-normal text-[14px] ">
            Software Developer Web|Games|Data|ML
          </p>
        </div>
        <div className="">
          <Image
            src={profile}
            width={100}
            height={100}
            className=" "
            alt="profile"
          />
        </div>
      </div>
      <About />
    </main>
  );
}
