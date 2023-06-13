import { DireccionResponse } from "./direccionResponse";
import { UserResponse } from "./userResponse";

export interface VentaResponse {

    id: string;

    gastoEnvio: number;

    lineas: Linea[];

    totalPedido: number;

    total: number;

    fecha: Date;

    comprador: UserResponse;

    direccionEnvio: DireccionResponse;

}

export interface Linea {
    plato: Plato
    precioUnidad: number
    cantidad: number
    subtotal: number
}

export interface Plato {
    id: string
    nombre: string
    precio: number
    restaurante: Restaurante
    imgUrl: string
    sinGluten: boolean
    categoria?: Categoria
}

export interface Restaurante {
    id: string
    nombre: string
}

export interface Categoria {
    id: string
    nombre: string
}

export interface Comprador {
    username: string
    nombre: string
    email: string
}

export interface DireccionEnvio {
    calle: string
    numero: string
    poblacion: string
    ciudad: string
    cp: string
    puerta: string
    piso: string
}
