import Image from "next/image";
import Link from "next/link";

export default function SuggestCard({ video }) {
  return (
    <Link href={`/videos/${video.videoId}`}>
      <div class="flex items-start space-x-4">
        <Image
          src={video.thumbnail}
          alt="Open World Games Thumbnail"
          class="w-30 h-20 rounded object-cover"
          width={100}
          height={50}
        />
        <div>
          <h3 class="font-semibold">{video.title}</h3>
          <p class="text-sm text-gray-400">{video.channelTitle}</p>
          <p class="text-sm text-gray-400">7,694M View now</p>
        </div>
      </div>
    </Link>
  );
}
