import { Component, Input, OnInit, Output } from '@angular/core';
import { toBase64 } from '../utilidades';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent implements OnInit {

  constructor() { }
  imagenBase64: string;

  @Output()
  archivoSeleccionado: EventEmitter<File> = new  EventEmitter<File>();

  @Input()
  urlImagenActual: string;

  ngOnInit(): void {
  }

  /// SE OBTIENE EL ARCHIVO Y SE CONVIERTE EN BASE 64 
  change(event){
    if(event.target.files.length > 0){
      const FILE: File = event.target.files[0];
      toBase64(FILE).then((value: string) => this.imagenBase64 = value)
      .catch(error => console.log(error));
      this.archivoSeleccionado.emit(FILE);
      this.urlImagenActual = null;
    }
  }
}
