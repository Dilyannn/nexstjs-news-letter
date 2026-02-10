import NewsListItem from '@/components/NewsListItem';
import { DATA_NEWS } from '@/news-data';

function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <NewsListItem news={DATA_NEWS} />
    </>
  );
}

export default NewsPage;