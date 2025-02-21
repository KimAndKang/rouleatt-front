declare global {
  class LatLng {
    constructor(lat: number, lng: number)
    getLat(): number
    getLng(): number
  }

  class Map {
    constructor(container: HTMLDivElement, options: MapOptions)
  }

  type MapOptions = {
    center: LatLng
    level: number
  }
  interface Window {
    kakao: {
      maps: {
        LatLng: typeof LatLng
        Map: typeof Map
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
