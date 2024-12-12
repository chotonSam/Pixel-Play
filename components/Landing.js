import { getDictionary } from "@/app/[lang]/dictionaries";
import videos from "@/lib/video.json";
import Hero from "./Hero";
import VIdeoCard from "./VIdeoCard";

export default async function Landing({ lang }) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <Hero dictionary={dictionary} />
      <section className="mt-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">{dictionary.popular}</h2>
          <a
            href="#"
            className="bg-color-gray hover:bg-opacity-80 text-sm px-4 py-2 rounded-full"
          >
            {dictionary.viewsAll}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* card start  */}

          {videos.map((video, index) => (
            <VIdeoCard key={video.videoId} video={video} />
          ))}

          {/* card end  */}
        </div>
      </section>
    </>
  );
}
