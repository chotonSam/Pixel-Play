import VideoDetails from "@/components/VideoDetails";

export default function VideoDetailspage({ params: { id, lang } }) {
  return <VideoDetails id={id} lang={lang} />;
}
