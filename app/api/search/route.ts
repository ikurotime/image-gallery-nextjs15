export async function GET(request: Request) {
  const query = new URL(request.url).searchParams.get('query')

  const res = await fetch(
    `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${process.env.GIPHY_API_KEY}&limit=25&rating=g`
  )
  const data = await res.json()

  return new Response(JSON.stringify(data), {
    status: 200
  })
}
