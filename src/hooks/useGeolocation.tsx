import { error } from "console"
import { useEffect, useState } from "react"

interface locationType {
  loaded: boolean
  coordinates?: { lat: number; lng: number }
  error?: { code: number; message: string }
}

export default function useGeolocation() {
  const [location, setLocation] = useState<locationType>({
    loaded: false,
    coordinates: { lat: 0, lng: 0 }
  })

  const onSuccess = (location: { coords: { latitude: number; longitude: number } }) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude
      }
    })
  }

  const onError = (error: { code: number; message: string }) => {
    setLocation({
      loaded: true,
      error
    })
  }
  useEffect(() => {
    if (!location.error) return
    const err = location.error
    if (err.code == 1) {
      alert("위치 권한이 거부되었습니다. 브라우저 설정에서 권한을 허용해주세요.")
    } else if (err.code === 2) {
      alert("위치를 가져올 수 없습니다. 네트워크 상태를 확인하세요.")
    }
  }, [location])
  useEffect(() => {
    if (!("geolocation" in navigator)) {
      console.log(navigator)
      onError({
        code: 0,
        message: "Not Supported"
      })
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError)
  }, [navigator])
  return location
}
