import { CategoriaResponse } from "./categoriaResponse"

export interface PlatoRequest {
    id: string | null
    nombre: string
    descripcion: string
    precio: number
    ingredientes: string[]
    sinGluten: boolean
    categoria: CategoriaResponse | null
}