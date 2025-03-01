"use client"
import KakaoMap from "@/components/map/KakaoMap"
import useGeolocation from "@/hooks/useGeolocation"

export default function KakaoMapPage() {
  const { loaded, coordinates, error } = useGeolocation()
  console.log("test", loaded, coordinates, error)
  return (
    <div>
      <KakaoMap
        className="h-[100vh] w-[100vw]"
        myLocation={coordinates?.lat && coordinates.lng ? { ...coordinates } : undefined}
      />
    </div>
  )
}
