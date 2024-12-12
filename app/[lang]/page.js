import Landing from "@/components/Landing";

export default function Home({ params: { lang } }) {
  return (
    <>
      <Landing lang={lang} />
    </>
  );
}
