"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Links() {
  const pathName = usePathname();
  let firstLink = "/bio";
  let secondLink = "/listen";
  let thirdLink = "/shows";
  let firstName = "Bio";
  let secondName = "Listen";
  let thirdName = "Shows";

  switch (pathName) {
    case "/":
      firstLink = "/bio";
      secondLink = "/listen";
      thirdLink = "/shows";
      firstName = "Bio";
      secondName = "Listen";
      thirdName = "Shows";
      console.log(firstName);
      break;
    case "/bio":
      firstLink = "/";
      firstName = "Home";
      break;
    case "/listen":
      secondLink = "/";
      secondName = "Home";
      break;
    case "/shows":
      thirdLink = "/";
      thirdName = "Home";
      break;
  }

  return (
    <div
      className=" 
    flex
    w-full 
    justify-around 
    gap-3 
    pt-4 
    sm:gap-7 
    md:gap-10"
    >
      <Link
        href={firstLink}
        className="
        sm:max-w-30 
        max-w-20 
        flex-grow 
        rounded 
        bg-rose-400 
        px-4 
        py-2 
        text-center 
        font-bold 
        text-white 
        hover:bg-rose-700 
        md:max-w-40"
      >
        {firstName}
      </Link>
      <Link
        href={secondLink}
        className="
        sm:max-w-30 
        max-w-20 
        flex-grow 
        rounded 
        bg-rose-400 
        px-4 
        py-2 
        text-center 
        font-bold 
        text-white 
        hover:bg-rose-700 
        md:max-w-40"
      >
        {secondName}
      </Link>
      <Link
        href={thirdLink}
        className="
        sm:max-w-30 
        max-w-20 
        flex-grow 
        rounded 
        bg-rose-400 
        px-4 
        py-2 
        text-center 
        font-bold 
        text-white 
        hover:bg-rose-700 
        md:max-w-40"
      >
        {thirdName}
      </Link>
    </div>
  );
}
