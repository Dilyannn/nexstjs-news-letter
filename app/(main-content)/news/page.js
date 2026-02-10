import NewsListItem from '@/components/NewsListItem';
import { getAllNews } from '@/lib/news';

async function NewsPage() {
  const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsListItem news={news} />
    </>
  );
}

export default NewsPage;