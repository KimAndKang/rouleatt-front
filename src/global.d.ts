declare const sop: {
  map: (id: string) => {
    setView: (coords: any, zoom: number) => void
    remove: () => void
  }
  utmk: (x: number, y: number) => any
}
