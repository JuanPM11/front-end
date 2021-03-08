import { Component, Input, OnInit, Output } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/MultipleSelectorModel';
import { actorPeliculaDTO } from 'src/app/actores/actor';


@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup

  @Input()
  modelo: PeliculaDTO;

  @Output()
  onSubmit: EventEmitter<PeliculaCreacionDTO> = new EventEmitter<PeliculaCreacionDTO>();

  @Input()
  errores: string[] = [];

  @Input()
  generosNoSeleccionados: MultipleSelectorModel[] ;

  @Input()
  generosSeleccionados: MultipleSelectorModel[] = [];

  @Input()
  cinesNoSeleccionados: MultipleSelectorModel[];

  @Input()
  cinesSeleccionados: MultipleSelectorModel[] = [];

  @Input()
  actoresSeleccionados: actorPeliculaDTO[] = [];

  imagenCambiada = false;


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo:[
        '',{
          validators: [Validators.required]
        }
      ],
      resumen:'',
      enCines: false,
      trailer: '',
      fechaLanzamiento: '',
      poster: '',
      generosIds: '',
      cinesIds: '',
      actores: ''
    });

    if(this.modelo!== undefined){
      this.form.patchValue(this.modelo);
    }

  }


  guardarCambios(){

    const GENEROSIDS = this.generosSeleccionados.map(val => val.llave);
    this.form.get('generosIds').setValue(GENEROSIDS);

    const CINESIDS = this.cinesSeleccionados.map(val => val.llave);
    this.form.get('cinesIds').setValue(CINESIDS);

    const actores = this.actoresSeleccionados.map(val => {
      return {id: val.id, personaje: val.personaje}
    });

    this.form.get('actores').setValue(actores);

    if(!this.imagenCambiada){
      this.form.patchValue({'poster': null});
    }

    this.onSubmit.emit(this.form.value); 

  }

  archivoSeleccionado(archivo: File){
    this.form.get('poster').setValue(archivo);
    this.imagenCambiada = true;

  }

  changeMarkDown(texto){
    this.form.get('resumen').setValue(texto);
    
  }

  
}
