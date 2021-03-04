import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { formatearFecha } from '../utilidades/utilidades';
import { actorCreacionDTO, actorDTO, actorPeliculaDTO } from './actor';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  constructor(private http:HttpClient) { }

  private apiURL = environment.apiURL + 'actores';

  public obtenerTodos(pagina: number, cantidadRegistrosAMostrar: number): Observable<any>{
    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append('recordsPorPagina', cantidadRegistrosAMostrar.toString());
    return this.http.get<actorDTO[]>(this.apiURL, {observe: 'response', params});
  }

  public borrar(id: number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }


  public crear(actor: actorCreacionDTO){

    const formData = this.construirFormData(actor);

    return this.http.post(this.apiURL, formData);
  }

  public editar(id: number, actor: actorCreacionDTO){

    const formData = this.construirFormData(actor);

    return this.http.put(`${this.apiURL}/${id}`, formData);
  }

  private construirFormData(actor: actorCreacionDTO): FormData{
    const FORMDATA = new FormData();
    FORMDATA.append('nombre', actor.nombre);
    if(actor.biografia){
    FORMDATA.append('biografia', actor.biografia);
     }
    if(actor.fechaNacimiento){
      FORMDATA.append('fechaNacimiento', formatearFecha(actor.fechaNacimiento));
    }
    if(actor.foto){
        FORMDATA.append('foto', actor.foto);
     }
     return FORMDATA;
  }

  public obtenerPorId(id: number): Observable<actorDTO>{
    return this.http.get<actorDTO>(`${this.apiURL}/${id}`);
  }

  public obtenerPorNombre(nombre: string): Observable<actorPeliculaDTO[]>{
    const headers = new HttpHeaders('Content-Type: application/json');
    return this.http.post<actorPeliculaDTO[]>(`${this.apiURL}/buscarPorNombre`, JSON.stringify(nombre), {headers});
  }
}
