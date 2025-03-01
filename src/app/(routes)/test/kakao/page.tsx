"use client"
import { useEffect, useRef } from "react"

export default function Home() {
  const kakaoMapContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const kakao = window?.kakao
    if (kakaoMapContainer?.current && typeof kakao !== "undefined") {
      const container = kakaoMapContainer.current
      kakao.maps.load(() => {
        const options = {
          center: new kakao.maps.LatLng(33.450701, 126.570667),
          level: 3
        }

        const map = new kakao.maps.Map(container, options)
      })
    }
  }, [kakaoMapContainer])

  return (
    <div>
      <div id="map" ref={kakaoMapContainer} className="h-[500px] w-[500px]"></div>
    </div>
  )
}
