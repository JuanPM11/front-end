import { NumberSymbol } from "@angular/common";

export interface Coordenada{
    latitud: number,
    longitud: NumberSymbol
}

export interface CoordenadaConMensaje extends Coordenada{
   mensaje: string;
}