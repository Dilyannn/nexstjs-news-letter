import Link from "next/link";
import { Suspense } from "react";

import NewsListItem from "@/components/NewsListItem";
import {
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
  getAvailableNewsMonths,
} from "@/lib/news";

async function NewsContent({ year, month }) {
  let news;
  if (year && !month) { 
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsListItem news={news} />;
  }

  return newsContent;
}  

export default async function FilteredNewsPage({ params }) {
  const { filter } = await params;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

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
    links = await getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    links = [];
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
      
      <Suspense fallback={<p>Loading news...</p>}>
        <NewsContent year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
}
