import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginRequest } from '../model/loginRequest';
import { LoginResponse } from '../model/loginResponse';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public logIn(loginRequest: LoginRequest): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${environment.URL_BASE_API}/auth/login`, loginRequest);
  }

}
