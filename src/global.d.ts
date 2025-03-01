declare global {
  class LatLng {
    constructor(lat: number, lng: number)
    getLat(): number
    getLng(): number
  }

  class KaoKaoMap {
    constructor(container: HTMLDivElement, options: MapOptions)
    setCenter(latLng: LatLng): void
  }
  class Marker {
    constructor({ position: LatLng })
    setMap(map: KaoKaoMap): void
  }

  type MapOptions = {
    center: LatLng
    level: number
  }
  interface Window {
    kakao: {
      maps: {
        LatLng: typeof LatLng
        Map: typeof KaoKaoMap
        Marker: typeof Marker
        load: (fn: () => void) => void
      }
    }
  }

  declare const sop: {
    map: (id: string) => {
      setView: (coords: any, zoom: number) => void
      remove: () => void
    }
    utmk: (x: number, y: number) => any
  }
}
export {}
