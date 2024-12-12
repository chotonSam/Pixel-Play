import Header from "@/components/Header";
import { Play } from "next/font/google";
import "../globals.css";
import { getDictionary } from "./dictionaries";

const play = Play({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "A Video Platform", // Fixed typo: "Plartform" -> "Platform"
  description: "A video streaming platform", // Fixed typo: "Plartform" -> "Platform"
};

export default async function RootLayout({ children, params }) {
  const dictionary = await getDictionary(params.lang);
  return (
    <html lang="en">
      <body className={`${play.className}  bg-color-bg text-white`}>
        <div className="container mx-auto px-4 py-4">
          <Header dictionary={dictionary} />
          {children}
          <div id="modal-root-content" />
        </div>
      </body>
    </html>
  );
}
