import NewsListItem from "@/components/NewsListItem.jsx";
import { getNewsForYear } from "@/lib/news.js";

export default async function FilteredNewsPage({ params }) {
  const { year } = await params;
  const news = getNewsForYear(year);

  return (
    <>
      <NewsListItem news={news} />
    </>
  );
}
