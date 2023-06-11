import { CategoriaResponse } from "./categoriaResponse"

export interface PlatoDetailResponse {
    id: string
    nombre: string
    descripcion: string
    precio: number
    imgUrl: string
    ingredientes: string[]
    sinGluten: boolean
    categoria: CategoriaResponse
  }
  