import React from 'react'

export default async function Page({ params }) {
  const { blub } = await params

  return (
    <div>
      <h1>News Article</h1>
      <p>Article ID: {blub}</p>
    </div>
  )
}