export function GET(request) {
  // Access search parameters: /api?name=value
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name') || 'Guest';

  return new Response(JSON.stringify({ message: `Hello ${name}!` }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request) {
  // Parse JSON body from request
  const body = await request.json();

  return Response.json({
    received: body,
    status: 'success'
  });
}
