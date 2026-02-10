export async function GET(request, { params }) {
  const { slug } = await params;
  
  const response = await fetch('http://localhost:8080/news');

  if (!response.ok) {
    return Response.json({ error: "Failed to fetch news" }, { status: 500 });
  }

  const news = await response.json();
  const newsItem = news.find((item) => item.slug === slug);

  if (!newsItem) {
    return Response.json({ error: "News item not found" }, { status: 404 });
  }

  return Response.json(newsItem);
}

// Redirect example
export async function DELETE(request, { params }) {
  // Logic to "delete" a resource...
  return Response.json({ message: `Simulated deletion of ${params.slug}` });
}
