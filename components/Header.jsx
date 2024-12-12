import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({ dictionary }) {
  return (
    <header class="flex justify-between  items-center mb-8">
      <div class="flex items-center justify-self-start space-x-8">
        <Link href="/">
          <div className="flex items-center space-x-1">
            {/* Logo Icon */}
            <div className="w-10 h-10 bg-color-purple flex items-center justify-center rounded-md">
              <span className="text-white font-bold text-xl">P</span>
            </div>

            {/* Logo Text */}
            <h1 className="text-3xl font-bold text-white">
              <span className="text-color-purple">Pixel</span>
              <span className="text-white">Play</span>
            </h1>
          </div>
        </Link>
        <nav class=" hidden md:flex space-x-6">
          <a href="#" class="text-color-purple font-semibold">
            {dictionary.topStreams}
          </a>
          <a href="#" class="text-gray-400 hover:text-white">
            {dictionary.games}
          </a>
          <a href="#" class="text-gray-400 hover:text-white">
            {dictionary.team}
          </a>
        </nav>
      </div>

      <div class="flex items-center space-x-4">
        <div class="relative hidden md:flex">
          <input
            type="text"
            placeholder={dictionary.search}
            class="bg-color-gray rounded-full py-2 px-4 w-64 focus:outline-none focus:ring-2 focus:ring-color-purple"
          />
          <svg
            class="w-5 h-5 text-gray-400 absolute right-3 top-2.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        {/* <!-- যেহেতু videos.json এ কোনো Avatar দেয়া নাই, সেহেতু আপনি যেকোনো র‍্যান্ডম Avatar ব্যবহার করতে পারবেন --> */}
        <Image
          src="/assets/avatar.png"
          alt="User Avatar"
          class="w-8 h-8 rounded-full"
          width={6}
          height={6}
        />
        <LanguageSwitcher />
      </div>
    </header>
  );
}
