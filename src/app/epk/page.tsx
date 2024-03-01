import Header from "../Components/Header";
import Links from "../Components/Links";
import Bio from "./Bio";
import PhotoGallery from "./PhotoGallery";

export default function EPK() {

  return (
    <div
      className="h-fit min-h-screen bg-cover"
      style={{
        backgroundImage:
          "url(/flowersAndRiver.jpg)",
        backgroundSize: '100vw'
      }}
    >
      <div className="bg-white">
        <Header />
      </div>

      <Links />

      <main className="flex w-full flex-col">
        <div className="flex justify-center w-full">
       <Bio />
        </div>
      <PhotoGallery />
      </main>
    </div>
  );
}
