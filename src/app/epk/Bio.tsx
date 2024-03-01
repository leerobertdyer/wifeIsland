import { inter } from "../fonts";


export default function Bio() 
{
    return (
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
    )
}