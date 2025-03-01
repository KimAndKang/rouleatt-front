"use client"
import Script from "next/script"
import { useEffect, useState } from "react"

export default function Home() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false)
  useEffect(() => {
    if (isScriptLoaded && typeof sop !== "undefined") {
      const map = sop.map("sgis-map")
      map.setView(sop.utmk(953820, 1953437), 9)

      return () => {
        map.remove()
      }
    }
  }, [isScriptLoaded])

  return (
    <div>
      <Script
        src={process.env.NEXT_PUBLIC_SGIS_MAP_URL}
        strategy="afterInteractive"
        onLoad={() => setIsScriptLoaded(true)}
      />
      <div id="sgis-map" className="h-[500px] w-[500px]"></div>
    </div>
  )
}
