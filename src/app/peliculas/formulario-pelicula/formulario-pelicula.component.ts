import { Component, Input, OnInit, Output } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/MultipleSelectorModel';


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



  generosNoSeleccionados: MultipleSelectorModel[] = [{llave:1, valor: 'Drama'},{llave:2, valor: 'Acción'},{llave:3, valor: 'Comedia'}]

  generosSeleccionados: MultipleSelectorModel[] = [];

  cinesNoSeleccionados: MultipleSelectorModel[] = [
    {llave: 1, valor: 'Sambil'},
    {llave: 2, valor: 'Agora'},
    {llave: 3, valor: 'Acrópolis'}
  ]

  cinesSeleccionados: MultipleSelectorModel[] = [];

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
      generosId: '',
      cinesId: ''
    });

    if(this.modelo!== undefined){
      this.form.patchValue(this.modelo);
    }

  }


  guardarCambios(){

    const GENEROSIDS = this.generosSeleccionados.map(val => val.llave);
    this.form.get('generosId').setValue(GENEROSIDS);

    const CINESIDS = this.cinesSeleccionados.map(val => val.llave);
    this.form.get('cinesId').setValue(CINESIDS);
    this.onSubmit.emit(this.form.value); 
  }

  archivoSeleccionado(archivo: File){
    this.form.get('poster').setValue(archivo);

  }

  changeMarkDown(texto){
    this.form.get('changeMarkDown').setValue(texto);
    
  }

  
}
