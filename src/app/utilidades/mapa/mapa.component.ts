import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { latLng, LeafletMouseEvent, tileLayer, Marker, marker, icon } from 'leaflet';
import { Coordenada } from './coordenada';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

Marker.prototype.options.icon = iconDefault;


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor() { }

  @Input()
  coordenadasIniciales: Coordenada[] = [];

  @Output()
  coordenadaSeleccionada: EventEmitter<Coordenada> = new EventEmitter<Coordenada>();

  ngOnInit(): void {

    this.capas = this.coordenadasIniciales.map(valor => marker([valor.latitud, valor.longitud]));
  }
  

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 14,
    center: latLng(1.2006185806530953 , -77.26583182811737)
  };

  capas: Marker<any>[] = [];

  manejarClick(event: LeafletMouseEvent){
    const LATITUD = event.latlng.lat;
    const LONGITUD = event.latlng.lng;
    this.capas=[];
    this.capas.push(marker([LATITUD,LONGITUD]));
    this.coordenadaSeleccionada.emit({latitud: LATITUD, longitud: LONGITUD});
  }
}
