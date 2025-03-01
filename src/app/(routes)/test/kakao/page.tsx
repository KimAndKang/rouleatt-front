"use client"
import KakaoMap from "@/components/map/KakaoMap"
import useGeolocation from "@/hooks/useGeolocation"
import { useEffect } from "react"

const getRestraunts = () => {
  return fetch("http://localhost:8080/restaurants/nearby?x=127.12909643077252&y=37.41204078264615&d=100")
}

export default function KakaoMapPage() {
  const { loaded, coordinates, error } = useGeolocation()
  // useEffect(() => {
  //   ;async () => {
  //     const res = await getRestraunts()
  //     console.log("res", res)
  //   }
  // }, [])
  return (
    <div>
      <KakaoMap
        className="h-[100vh] w-[100vw]"
        myLocation={coordinates?.lat && coordinates.lng ? { ...coordinates } : undefined}
      />
    </div>
  )
}
