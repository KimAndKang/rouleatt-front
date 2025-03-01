"use client"
import { cn } from "@/utils/cn"
import type { HTMLAttributes } from "react"
import { useEffect, useRef } from "react"

interface Params extends HTMLAttributes<HTMLDivElement> {}

export default function KakaoMap({ ...htmlAttributes }: Params) {
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
      <div id="map" ref={kakaoMapContainer} className={cn("h-full w-full", htmlAttributes.className)}></div>
    </div>
  )
}
