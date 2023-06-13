import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VentaResponse } from '../model/ventaResponse';
import { PageDTO } from '../model/pageDTO';



@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(private http: HttpClient) { }

  public getSales(page: number, size: number): Observable<PageDTO<VentaResponse>>{
    return this.http.get<PageDTO<VentaResponse>>(`${environment.URL_BASE_API}/venta/?page=${page}&size=${size}`);
  }

  public findDetails(id: string):  Observable<VentaResponse> {
    return this.http.get<VentaResponse>(`${environment.URL_BASE_API}/venta/${id}`);
  }

}
