import { Component, OnInit } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {

  constructor() { }

  modelo:cineDTO = {nombre: "Sabmil", latitud:1.2157380159096234,longitud:-77.27757453918458} 

  ngOnInit(): void {
  }

  
  guardarCambios(cine: cineCreacionDTO){
    console.log(cine);
  }

}
