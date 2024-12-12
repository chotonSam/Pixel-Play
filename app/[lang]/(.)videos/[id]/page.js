import Modal from "@/components/Modal";
import VideoDetails from "@/components/VideoDetails";

export default function VideoDetailspage({ params: { id, lang } }) {
  return (
    <Modal>
      <VideoDetails id={id} lang={lang} />
    </Modal>
  );
}
