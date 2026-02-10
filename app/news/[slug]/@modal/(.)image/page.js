import { notFound } from "next/navigation";
import { DATA_NEWS } from "@/news-data.js";
import Modal from "@/components/Modal";

export default async function InterceptedImagePage({ params }) {
  const { slug } = await params;
  const newsItem = DATA_NEWS.find((item) => item.slug === slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <Modal>
      <div className="fullscreen-image">
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
      </div>
    </Modal>
  );
}
