import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PageDTO } from '../model/pageDTO';
import { PlatoResponse } from '../model/plato';
import { CategoriaResponse } from '../model/categoriaResponse';

const mapping = "categoria"

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  public getFromRestaurante(id: String): Observable<CategoriaResponse[]> {
    return this.http.get<CategoriaResponse[]>(`${environment.URL_BASE_API}/${mapping}/restaurante/${id}`);
  }

  public save(categorias: CategoriaResponse[], idRestaurante: String): Observable<CategoriaResponse[]> {
    return this.http.put<CategoriaResponse[]>(`${environment.URL_BASE_API}/${mapping}/restaurante/${idRestaurante}`, categorias);
  }
  
}
