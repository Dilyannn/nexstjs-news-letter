import { notFound } from "next/navigation";
import { DATA_NEWS } from "@/news-data.js";

export default async function ImagePage({ params }) {
  const { slug } = await params;
  const newsItem = DATA_NEWS.find((item) => item.slug === slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}