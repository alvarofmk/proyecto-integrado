import { CocinaResponse } from "./cocinaResponse"

export interface RestauranteResponse {
    id: string
    nombre: string
    coverImgUrl: string
    apertura: string
    cierre: string
    descripcion: String
    cocinas: CocinaResponse[]
}
  