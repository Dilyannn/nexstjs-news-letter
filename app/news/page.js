import Link from 'next/link';
import { DATA_NEWS } from '@/news-data';

function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul className="news-list">
        {DATA_NEWS.map((newsItem) => (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>
              <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
              <span>{newsItem.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NewsPage;