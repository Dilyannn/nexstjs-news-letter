export async function getAllNews() {
  const response = await fetch('http://localhost:8080/news');

  if (!response.ok) {
    throw new Error('Failed to fetch news.');
  }

  const news = await response.json();
  return news;
}

export async function getLatestNews() {
  const news = await getAllNews();
  return news.slice(0, 3);
}

export async function getAvailableNewsYears() {
  const news = await getAllNews();
  return news.reduce((years, newsItem) => {
    const year = new Date(newsItem.date).getFullYear();
    if (!years.includes(year)) {
      years.push(year);
    }
    return years;
  }, []).sort((a, b) => b - a);
}

export async function getAvailableNewsMonths(year) {
  const news = await getAllNews();
  return news.reduce((months, newsItem) => {
    const newsYear = new Date(newsItem.date).getFullYear();
    if (newsYear === +year) {
      const month = new Date(newsItem.date).getMonth();
      if (!months.includes(month)) {
        months.push(month + 1);
      }
    }
    return months;
  }, []).sort((a, b) => b - a);
}

export async function getNewsForYear(year) {
  const news = await getAllNews();
  return news.filter(
    (newsItem) => new Date(newsItem.date).getFullYear() === +year
  );
}

export async function getNewsForYearAndMonth(year, month) {
  const news = await getAllNews();
  return news.filter((newsItem) => {
    const newsYear = new Date(newsItem.date).getFullYear();
    const newsMonth = new Date(newsItem.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}
