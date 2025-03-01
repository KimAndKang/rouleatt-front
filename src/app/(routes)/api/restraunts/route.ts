import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const lat = searchParams.get("lat")
  const lng = searchParams.get("lng")
  const res = await fetch(`http://localhost:8080/restaurants/nearby?x=${lng}&y=${lat}5&d=100`)
    .then((res) => res.json())
    .catch((err) => err)

  return Response.json({ res })
}
