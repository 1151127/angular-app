import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TipoUtilizador } from '../models/tipoUtilizador/tipoUtilizador';
import { Observable } from 'rxjs';


const urlHost = 'https://webapige.herokuapp.com/api/tipoUtilizador';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TipoUtilizadorService {

  constructor(private httpClient: HttpClient) { }


  getAllTiposUsers():  Observable<TipoUtilizador[]> {
    return   this.httpClient.get<TipoUtilizador[]>(urlHost);
  }

  postTipoUser(tu: TipoUtilizador): Observable<TipoUtilizador> {
    return this.httpClient.post<TipoUtilizador>(urlHost, JSON.stringify(tu), httpOptions); 
  }

}
