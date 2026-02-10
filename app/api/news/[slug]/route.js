import { DATA_NEWS } from "@/news-data.js";

export async function GET(request, { params }) {
  const { slug } = await params;
  const newsItem = DATA_NEWS.find((item) => item.slug === slug);

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
