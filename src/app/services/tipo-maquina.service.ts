import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoMaquina } from '../models/tipomaquina/tipomaquina';

const url = 'https://localhost:5001/api/TiposMaquinas/simplificado';
const urlHost = 'https://mdfapi.azurewebsites.net/api/TiposMaquinas/simplificado'
const urlPost = 'https://mdfapi.azurewebsites.net/api/TiposMaquinas';
const urlPostHost = 'https://localhost:5001/api/TiposMaquinas';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root',
})
export class TipoMaquinaService {

  constructor(private httpClient: HttpClient) { }

  getAllTiposMaquinas():  Observable<TipoMaquina[]> {
    return   this.httpClient.get<TipoMaquina[]>(urlHost);
  }

  getTipoMaquinaById(id): Observable<TipoMaquina> {
    return this.httpClient.get<TipoMaquina>(urlPost + '/' + id);
  }

  postTipoMaquina (tm: TipoMaquina): Observable<TipoMaquina> {
    return this.httpClient.post<TipoMaquina>(urlPost, JSON.stringify(tm), httpOptions);
  }

  putTipoMaquina (tm: TipoMaquina): Observable<TipoMaquina> {
    console.log("service: ", tm);
    return this.httpClient.put<TipoMaquina>(urlPost + '/' + JSON.stringify(tm.tipoMaquinaId) , JSON.stringify(tm), httpOptions);
  }



}
