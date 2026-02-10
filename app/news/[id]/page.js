export default async function Page({ params }) {
  const { id } = await params
  const newsId = id

  return (
    <div>
      <h1>News Article</h1>
      <p>Article ID: {newsId}</p>
    </div>
  )
}