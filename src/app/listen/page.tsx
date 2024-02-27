import Header from "../Components/Header";
import Links from "../Components/Links";

export default function Listen() {
  return (
    <div>
      <Header />
      <div className=" bg-emerald-400 min-h-screen">
      <Links />

      <div className="mt-5 border-rose-800 border-double border-t-4 border-b-4 flex w-screen flex-col items-center gap-5 bg-rose-400 p-5">
        <h1 className="text-3xl">A few of our songs:</h1>

        <div className="flex flex-col items-center">
          <p>Body Like A Cave</p>
          <div className="rounded-lg bg-rose-800 p-4">
            <audio src="/bodyLikeACave.mp3" controls className="h-12"/>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <p>Old Blue World</p>
          <div className="rounded-lg bg-rose-800 p-4">
            <audio src="/oldBlueWorld.mp3" controls className="h-12"/>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <p>Two Kids</p>
          <div className="rounded-lg bg-rose-800 p-4">
            <audio src="/twoKids.mp3" controls className="h-12"/>
          </div>
        </div>

           </div>
      </div>
    </div>
  );
}
