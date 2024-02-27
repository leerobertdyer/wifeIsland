import { SlSocialInstagram } from "react-icons/sl";
import { BsFacebook } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { indie } from "../fonts";
import Image from "next/image";

export default function Header() {
  return (
      <header
        className=" 
      flex 
      h-auto
      w-full
      items-center 
      justify-between 
      gap-2
      border-y-4
      border-rose-300
      p-3
      sm:gap-4 md:gap-6 
      "
      >
        <div id="social" className="flex w-1/6 flex-col gap-4">
          <SlSocialInstagram className="h-3 w-3 sm:h-5 sm:w-5 md:h-7 md:w-7" />
          <BsFacebook className="h-3 w-3 sm:h-5 sm:w-5 md:h-7 md:w-7" />
        </div>

        <div
          id="mainTitle"
          className="flex w-full flex-col items-center gap-2 text-center"
        >
          <h1 className="m-auto flex w-full items-center justify-around gap-4 text-2xl sm:text-3xl md:text-6xl">
            <div className="sm:h-15 sm:w-15 md:h-30 h-12 w-12 md:w-20">
              <Image
                src="/bird.png"
                width={80}
                height={80}
                layout="responsive"
                alt=""
              />
            </div>
            Wife Island
            <div className="sm:h-15 sm:w-15 md:h-30 h-12 w-12 md:w-20">
              <Image
                src="/bird.png"
                width={80}
                height={80}
                layout="responsive"
                alt=""
              />
            </div>
          </h1>
          <p className={`${indie.className} text-xs sm:text-sm md:text-lg`}>
            A dreamy, washed-out duo with a tremelo soul...
          </p>
        </div>

        <div className="flex w-1/6 flex-col items-center ">
          <HiOutlineMail className="h-5 w-5 sm:h-6 sm:w-6 md:h-9 md:w-9" />
          <p className="text-center text-xs ">Book Us</p>
        </div>
      </header>
  );
}
