import Header from "../Components/Header";
import Links from "../Components/Links";
import { inter } from "../fonts";

export default function Bio() {
  return (
    <div
      className="h-fit min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://previews.dropbox.com/p/thumb/ACNZUlEXk2Gx0CyLL7_OgDZpoRNfvW9GWFkHr6oR7ne0qodFFUFoJqQfNzLnHOT7APXnyZFGYt6RVyUviSTRlH0iSONEpuhjhvn4LRnpqqDcdb2PlhvsWkWJ-8vOucudsCH02OU2Fv3lMy4hMeGn3RFC4n9p9T9xw-8H9c_W8lsUYX-WAcJyRui9p3I-TCpnIZeFotqoXFBfNi-qUsLIB2bu-6tOy9gqzPTFmUqUQMQI5VnIlr6ggOuPkrcJoiyQKiadc_mJNdbQv_3v-2onIk9QR90XqGJ9gRYV7rf2FG7DOnc3Ee5aFhIn_pd3xn0iQSZuxZDcw0-E53xLEUKl1z3_KXOISN99iBcq6yejPU0Sl1np-D67G706WaI80Pw3fOQAKzGxuRr1skbrgkVFPEAA37NNVZbFg80bsdHGwsIiNpwElA5y-L4SZjosQQjAE23x_3S6b3wQ8Z8iGj6F0GVK/p.jpeg)",
        backgroundPositionY: "100px",
      }}
    >
      <div className="bg-white">
        <Header />
      </div>

      <Links />

      <main className="flex w-full flex-col">
        <div
          className={`
          ${inter.className} 
          border-5 
          w-11/12
          mt-2
          m-auto 
          h-fit 
          rounded-md 
          border-2 
          border-rose-300 
          bg-[#ffffffe2] 
          p-5 
          sm:ml-6 
          sm:mt-14  
          sm:w-1/2
          `}
        >
          <h1 className="text-center text-2xl">Bio</h1>
          Wife Island is a washed out dream of a folk rock duo. Based out of
          Asheville North Carolina, their songs range from story-telling ballads
          to up-beat stomping acoustic rock songs. A healthy mixture of old
          country, jazz, and their own wily indie spice mixture, they make an
          impressive amount of sound for two people, and can fit almost
          anywhere. Erin Campbell and Lee Dyer are the married songwriters of
          the group. Erin plays light tremolo electric guitar while Lee
          fingerpicks and slaps his acoustic, often while playing tambourine
          with his foot and rubbing his belly at the same time. Occasionally he
          picks up a trumpet or a clarinet, and they both sing. Inspired by: The
          Beatles, Wilco, Tom Waits, Patsy Cline, The Zombies, Simon &
          Garfunkel…
        </div>
      </main>
    </div>
  );
}
