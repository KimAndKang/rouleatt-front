"use client"
import { cn } from "@/utils/cn"
import type { HTMLAttributes } from "react"
import { useEffect, useRef, useState } from "react"

interface Params extends HTMLAttributes<HTMLDivElement> {
  myLocation?: { lat: number; lng: number }
}

export default function KakaoMap({ myLocation, ...htmlAttributes }: Params) {
  const kakaoMapContainer = useRef<HTMLDivElement>(null)
  const [kakaoMap, setkakaoMap] = useState<KaoKaoMap>()

  useEffect(() => {
    if (!myLocation) return
    const kakao = window?.kakao
    if (!kakaoMapContainer?.current || typeof kakao === "undefined") return
    if (!kakaoMap) return
    const markerPosition = new kakao.maps.LatLng(myLocation.lat, myLocation.lng)
    const marker = new kakao.maps.Marker({
      position: markerPosition
    })

    marker.setMap(kakaoMap)
    kakaoMap.setCenter(markerPosition)
  }, [myLocation, kakaoMapContainer.current])

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
        setkakaoMap(map)
      })
    }
  }, [kakaoMapContainer])

  return (
    <div>
      <div id="map" ref={kakaoMapContainer} className={cn("h-full w-full", htmlAttributes.className)}></div>
    </div>
  )
}
