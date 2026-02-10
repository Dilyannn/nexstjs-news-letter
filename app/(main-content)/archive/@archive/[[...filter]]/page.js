import NewsListItem from "@/components/NewsListItem";
import {
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
  getAvailableNewsMonths,
} from "@/lib/news";
import Link from "next/link";

export default async function FilteredNewsPage({ params }) {
  const { filter } = await params;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;
  let links = await getAvailableNewsYears(); // Default to years if something goes wrong, but usually overridden

  if (
    (selectedYear && !(await getAvailableNewsYears()).includes(+selectedYear)) ||
    (selectedMonth &&
      !(await getAvailableNewsMonths(selectedYear)).includes(+selectedMonth))
  ) {
    throw new Error("Invalid filter.");
  }

  // NOTE: In strict catch-all [...filter], selectedYear will always be present (index 0).

  if (selectedYear && !selectedMonth) {
    news = await getNewsForYear(selectedYear);
    links = await getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsListItem news={news} />;
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;

              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
