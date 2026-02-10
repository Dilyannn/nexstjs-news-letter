import { notFound } from 'next/navigation';
import { DATA_NEWS } from '@/news-data';
import Link from 'next/link.js';

export default async function NewsDetailPage({ params }) {
  const { slug } = await params;
  const newsItem = DATA_NEWS.find((item) => item.slug === slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`} className="image-link">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}