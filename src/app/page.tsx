"use client";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Links from "./Components/Links";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Header />
      <main
        style={{
          backgroundImage: "url(/camper.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div
          className="
          flex min-h-screen
        min-w-full 
        flex-col
        items-center 
        justify-start 
        gap-2 
        bg-gradient-to-br 
        from-[#ebddff7a]
        to-[#ffddfcb3] 
        pb-0 
        text-black 
        sm:pb-20"
        >
          <Links />
          <div
            className="mt-4"
            style={{
              width: "20vw",
              height: "20vw",
              maxWidth: "200px",
              maxHeight: "200px",
            }}
          >
            <Image
              src="/logo.png"
              width={200}
              height={200}
              className="w-full"
              alt=""
            />
          </div>

          <div className="flex h-20 w-60 items-center">
            <Image src="/wifeIslandText.png" width={300} height={100} alt="" />
          </div>
          <iframe
            src="https://www.youtube-nocookie.com/embed/IHQknZV8hLA"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg border-4 border-solid border-white"
            style={{
              width: "90vw",
              height: "60vw",
              maxWidth: "650px",
              maxHeight: "350px",
            }}
          ></iframe>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
