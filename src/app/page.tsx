import Header from "./Components/Header";
import Links from "./Components/Links";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Header />
      <main
        style={{
          backgroundImage:
            "url(https://previews.dropbox.com/p/thumb/ACOKNqkhtyAVRAlr1Qj0ZjBh38Pf9Jf-DqYykVVLKr42tL41f47bq0HxZJqqHmk1T-bhJPwDH5IcpLFD7I3CKoOpZdEw0zCb2ugK-XGZoTLVuAH1hgn0von1Ex_6g3xC0I2irvd9gAVaI8dh6MLxrr1B8Cb9pOOePCK7JwStA2ajCX6Th9-F03u01P0zavtEpbCD0b8T1IJ53n8EbfGde863DsENIUtebxqVH3nADQi1CY99DlVKRhZj92Rwxp-7ZvL5aaSKXNgDn2jQzGB0cFbwPN1ehaE9aDAmb6fGfSXDEZ18sa9EUmG4C_9EJ5CYWQJVR-i6n-2BoRYaiCXOLVuT/p.jpeg)",
          backgroundSize: "cover",
        }}
      >
        <div
          className="
        flex 
        min-h-screen
        min-w-full 
        flex-col 
        items-center 
        justify-start 
        gap-2
        bg-gradient-to-br 
        from-[#ebddff7a] 
        to-[#ffddfcb3] 
        text-black"
        >
          <Links />
          <div className="mt-2 w-10 h-10" style={{width: '27vw', height: '27vw'}}>
            <Image
              src="/logo.png"
              width={200}
              height={200}
              layout="responsive"
              alt=""
            />
          </div>

          <div className="flex h-20 w-60 items-center">
            <Image
              src="/wifeIslandText.png"
              width={300}
              height={100}
              layout="responsive"
              alt=""
            />
          </div>
          <iframe
            src="https://www.youtube.com/embed/IHQknZV8hLA"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg border-white border-solid border-4"
          ></iframe>
          <p>picture carousel</p>
          <p>Calendar</p>
        </div>
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
}
