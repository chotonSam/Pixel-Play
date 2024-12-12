import { getDictionary } from "@/app/[lang]/dictionaries";
import videos from "@/lib/video.json";
import Image from "next/image";
import { notFound } from "next/navigation";
import SuggestCard from "./SuggestCard";

export default async function VideoDetails({ id, lang }) {
  const videoExists = videos.find((video) => video.videoId === id);
  if (!videoExists) {
    notFound();
  }
  const videoIndex = videos.findIndex((item) => item.videoId === id);
  const video = videos[videoIndex];

  const dictionary = await getDictionary(lang);

  return (
    <main class="flex flex-col lg:flex-row gap-6">
      <div class="lg:w-3/4">
        <div class="relative">
          <iframe
            src={`https://www.youtube.com/embed/${video.videoId}`}
            title="YouTube video player"
            frameborder="0"
            class="w-full aspect-video "
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <div class="flex items-center space-x-4">
              <button class="bg-color-gray hover:bg-opacity-80 rounded-full p-2">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </button>
              <div class="bg-color-purple text-white px-2 py-1 rounded text-sm">
                {dictionary.live}
              </div>
              <span class="text-sm">46:02</span>
              <button class="bg-color-purple hover:bg-opacity-80 text-white px-4 py-1 rounded-full text-sm">
                {dictionary.donate}
              </button>
            </div>
          </div>
        </div>
        <h1 class="text-2xl font-bold mt-4">{video.title}</h1>
        <p className="text-sm text-gray-300 my-5">{video.description}</p>
        <div class="flex items-center space-x-4 mt-2">
          {/* <!-- যেহেতু videos.json এ কোনো Avatar দেয়া নাই, সেহেতু আপনি যেকোনো র‍্যান্ডম Avatar ব্যবহার করতে পারবেন --> */}
          <Image
            src={`https://i.pravatar.cc/150?img=${videoIndex}`}
            alt="Avatar"
            class="w-10 h-10 rounded-full"
            width={10}
            height={10}
          />
          <div>
            <p class="font-semibold">{video?.channelTitle}</p>
          </div>
          <button class="bg-color-purple hover:bg-opacity-80 text-white px-4 py-1 rounded-full text-sm ml-auto">
            {dictionary.subscribe}
          </button>
        </div>
      </div>
      <div class="lg:w-1/4">
        <h2 class="text-xl font-semibold mb-4">{dictionary.youMayLike}</h2>
        <div class="space-y-4">
          {/* suggestCard  */}
          {videos.slice(0, 6).map((video) => (
            <SuggestCard key={video.videoId} video={video} />
          ))}
        </div>
      </div>
    </main>
  );
}
