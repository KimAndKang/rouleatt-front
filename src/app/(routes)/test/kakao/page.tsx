"use client"
import KakaoMap from "@/components/map/KakaoMap"
import useGeolocation from "@/hooks/useGeolocation"
import { useEffect } from "react"

const getRestraunts = (lat: number, lng: number) => {
  return fetch(`/api/restraunts?lat=${lat}&lng=${lng}`)
}

export default function KakaoMapPage() {
  const { loaded, coordinates, error } = useGeolocation()
  useEffect(() => {
    if (!(coordinates?.lat && coordinates?.lng)) return
    getRestraunts(coordinates.lat, coordinates.lng).then(async (data) => {
      const res = await data.json()
      console.log("data", res)
    })
  }, [coordinates])
  return (
    <div>
      <KakaoMap
        className="h-[100vh] w-[100vw]"
        myLocation={coordinates?.lat && coordinates.lng ? { ...coordinates } : undefined}
      />
    </div>
  )
}
