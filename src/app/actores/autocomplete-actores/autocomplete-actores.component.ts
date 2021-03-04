import { CdkDragDrop, CdkDragPreview, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';
import { Console } from 'console';
import { actorPeliculaDTO } from '../actor';
import { ActoresService } from '../actores.service';

@Component({
  selector: 'app-autocomplete-actores',
  templateUrl: './autocomplete-actores.component.html',
  styleUrls: ['./autocomplete-actores.component.css']
})
export class AutocompleteActoresComponent implements OnInit {

  constructor(private actoresService: ActoresService) { }

  control: FormControl = new FormControl();

  @Input()
  actoresSeleccionados: actorPeliculaDTO[] = [];

  actoresAMostrar: actorPeliculaDTO[] = [];

  columnasAMostrar = ['imagen', 'nombre', 'personaje', 'acciones'];

  @ViewChild(MatTable) table: MatTable<any>;

  ngOnInit(): void {
    this.control.valueChanges.subscribe((nombre) => {
      if (typeof nombre === 'string' && nombre) {
        this.actoresService.obtenerPorNombre(nombre).subscribe(
          (actores) => (this.actoresAMostrar = actores),
          (error) => console.error(error)
        );
      }
    });
  }

  optionSelected(event: MatAutocompleteSelectedEvent){
    console.log(event.option.value);
    this.actoresSeleccionados.push(event.option.value);
    this.control.patchValue('');
    if(this.table !== undefined){
      this.table.renderRows();
    }
  }

  eliminar(actor){
    const INDICE = this.actoresSeleccionados.findIndex(a=> a.nombre == actor.nombre);
    this.actoresSeleccionados.splice(INDICE,1);
    this.table.renderRows();
  }

  finalizarArrastre(event: CdkDragDrop<any[]>){
    const INDICEPREVIO = this.actoresSeleccionados.findIndex(
      actor => actor === event.item.data
    )
    moveItemInArray(this.actoresSeleccionados, INDICEPREVIO, event.currentIndex);
    this.table.renderRows();
  }
}
