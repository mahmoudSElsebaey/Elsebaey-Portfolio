import Image from "next/image";
import Socials from "../ui/Socials";

export default function Footer() {
  return (
    <div className="pb-10 pt-15 mt-25 relative">
      {/* border-top */}
      <div className="absolute top-0 left-1/2 translate-x-[-50%] h-[0px] 
      border-y-[1.7px] border-primary-1000/80 w-[65%] pt-1"></div> 
      {/* content footer */}
      <div className=" flex justify-center items-center gap-5 px-5 sm:p-0 ">
        <div className="">
          <Image
            src="/assets/Mahmoud_Elsebaey-QR-removebg-preview.png"
            width={150}
            height={100}
            alt="Mahmoud Elsebaey-QR"
            className="bg-white rounded-[10px]"
            />
        </div>
        <div className="flex flex-col gap-2 sm:gap-8">
            <p className="text-5xl md:text-6xl font-bold pl-0 md:pl-4">Send Me </p>
          <Socials />
        </div>
      </div>
      <p className="text-center opacity-60 pt-15 text-[15px] ">
        © {new Date().getFullYear()} All Rights Reserved, Mahmoud Elsebaey
      </p>
    </div>
  );
}
