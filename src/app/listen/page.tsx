import Header from "../Components/Header";
import Links from "../Components/Links";

export default function Listen() {
  return (
    <div>
      <Header />
      <div

        style={{
          backgroundImage: "url(/backsOnRoof.jpg)",
          backgroundSize: "cover",
        }}
      >
        <Links />

        <div
          className="
      mt-10 
      flex 
      w-screen 
      flex-col 
      items-center 
      gap-5 
      border-b-4 
      border-t-4 
      border-rose-800 
      bg-rose-400 bg-opacity-80 
      p-5 
      sm:m-auto 
      sm:mt-[150px] 
      sm:w-4/6 
      sm:border-4 
      sm:border-solid
      sm:rounded-3xl"

        >
          <h1 className="bg-[#ffffffcf] rounded-xl p-5 text-2xl">A few of our songs:</h1>

          <div className="flex flex-col items-center">
            <p className="text-white">Body Like A Cave</p>
            <div className="rounded-lg bg-rose-800 p-4">
              <audio src="/bodyLikeACave.mp3" controls className="h-12" />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-white">Old Blue World</p>
            <div className="rounded-lg bg-rose-800 p-4">
              <audio src="/oldBlueWorld.mp3" controls className="h-12" />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-white">Two Kids</p>
            <div className="rounded-lg bg-rose-800 p-4">
              <audio src="/twoKids.mp3" controls className="h-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
