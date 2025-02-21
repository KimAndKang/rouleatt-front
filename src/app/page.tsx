"use client"

import Script from "next/script"
import { useEffect, useState, useRef } from "react"

export default function Home() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false)
  useEffect(() => {
    if (isScriptLoaded && typeof sop !== "undefined") {
      const map = sop.map("map")
      map.setView(sop.utmk(953820, 1953437), 9)

      return () => {
        map.remove()
      }
    }
  }, [isScriptLoaded])

  return (
    <div>
      <Script
        src="https://sgisapi.kostat.go.kr/OpenAPI3/auth/javascriptAuth?consumer_key=7a40bd59fcf7410887cb"
        strategy="afterInteractive"
        onLoad={() => setIsScriptLoaded(true)}
      />
      <div id="map" className="h-[500px] w-[500px]"></div>
    </div>
  )
}
