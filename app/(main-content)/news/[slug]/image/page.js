import { notFound } from "next/navigation";
import { getAllNews } from "@/lib/news";

export default async function ImagePage({ params }) {
  const { slug } = await params;
  
  const news = await getAllNews();
  const newsItem = news.find((item) => item.slug === slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}