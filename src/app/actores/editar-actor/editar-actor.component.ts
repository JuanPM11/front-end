import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) {

   }


   modelo: actorDTO = {nombre: 'Juan', fechaNacimiento: new Date(), foto: 'https://m.media-amazon.com/images/M/MV5BOTI3ODk1MTMyNV5BMl5BanBnXkFtZTcwNDEyNTE2Mg@@._V1_UY317_CR6,0,214,317_AL_.jpg'}
  ngOnInit(): void {
    this.activeRoute.params.subscribe(params =>{
     // alert(params.id);
    })
  }

  guardarCambios(actor: actorCreacionDTO){
    console.log(actor);
  }
}
