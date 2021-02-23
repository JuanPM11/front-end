import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { PeliculaCreacionDTO } from 'src/app/peliculas/pelicula';


@Component({
  selector: 'app-input-makdown',
  templateUrl: './input-makdown.component.html',
  styleUrls: ['./input-makdown.component.css']
})
export class InputMakdownComponent implements OnInit {

  @Input()
  contenidoMarkDown = '';

  @Input()
  placeHolderTextArea: string = 'Texto';

  @Output()
  changeMarkDown: EventEmitter<string> = new EventEmitter<string>();

 
  constructor() { }

  ngOnInit(): void {
    console.log(this.contenidoMarkDown);
  }
 
  OnChangeMarkdown(evento):void{
    const texto = evento.target.value;
    this.contenidoMarkDown = texto;
    this.changeMarkDown.emit(texto);
   
  }
}
