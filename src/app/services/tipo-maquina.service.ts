import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoMaquina } from '../models/tipomaquina/tipomaquina';

const urlHost = 'https://localhost:5001/api/TiposMaquinas/simplificado';
const url = 'https://mdfapi.azurewebsites.net/api/TiposMaquinas/simplificado'
const urlPost ='https://localhost:5001/api/TiposMaquinas';

const auxs = url;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root',
})
export class TipoMaquinaService {

  constructor(private httpClient: HttpClient) { }

  getAllTiposMaquinas():  Observable<TipoMaquina[]> {
    return   this.httpClient.get<TipoMaquina[]>(auxs);
  }

  getTipoMaquinaById(id): Observable<TipoMaquina> {
    return this.httpClient.get<TipoMaquina>(auxs + id);
  }

  postTipoMaquina (tm: TipoMaquina): Observable<TipoMaquina> {
    return this.httpClient.post<TipoMaquina>(auxs, JSON.stringify(tm), httpOptions);
  }


}
