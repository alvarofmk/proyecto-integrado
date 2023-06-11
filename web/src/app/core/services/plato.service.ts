import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PageDTO } from '../model/pageDTO';
import { PlatoResponse } from '../model/plato';
import { RestauranteResponse } from '../model/restauranteResponse';
import { PlatoRequest } from '../model/platoRequest';
import { PlatoDetailResponse } from '../model/platoDetailResponse';

const mapping = "plato"

@Injectable({
  providedIn: 'root'
})
export class PlatoService {

  constructor(private http: HttpClient) { }

  public getFromRestaurante(id: String, page: number, size: number): Observable<PageDTO<PlatoResponse>> {
    return this.http.get<PageDTO<PlatoResponse>>(`${environment.URL_BASE_API}/${mapping}/restaurante/${id}?page=${page}&size=${size}`);
  }

  public delete(id: String) {
    return this.http.delete(`${environment.URL_BASE_API}/${mapping}/${id}`);
  }

  public create(platoNuevo: PlatoRequest, imagen: File, idRestaurante: string): Observable<PlatoResponse> {
    let formData = new FormData();
    formData.append('file', imagen, imagen.name);
    formData.append('body', new Blob([JSON.stringify(platoNuevo)], {
      type: "application/json"
    }));
    return this.http.post<PlatoResponse>(`${environment.URL_BASE_API}/${mapping}/${idRestaurante}`, formData)
  }

  public edit(plato: PlatoRequest): Observable<PlatoResponse> {
    return this.http.put<PlatoResponse>(`${environment.URL_BASE_API}/${mapping}/${plato.id}`, plato);
  }

  findById(idPlato: string): Observable<PlatoDetailResponse> {
    return this.http.get<PlatoDetailResponse>(`${environment.URL_BASE_API}/${mapping}/${idPlato}`);
  }

  public editImg(id: string, imagen: File): Observable<PlatoResponse> {
    let formData = new FormData();
    formData.append('file', imagen, imagen.name);
    return this.http.put<PlatoResponse>(`${environment.URL_BASE_API}/${mapping}/${id}/img/`, formData);
  }

}
