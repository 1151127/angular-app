import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Utilizador } from '../models/utilizador/utilizador';
import { Observable } from 'rxjs';


const urlHost = 'https://webapige.herokuapp.com/api/Utilizador';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UtilizadorService {

  constructor(private httpClient: HttpClient) { }


  getUserById(id): Observable<Utilizador> {
    return this.httpClient.get<Utilizador>(urlHost + '/' + id);
  }

  getAllUsers(): Observable<Utilizador[]> {
    return this.httpClient.get<Utilizador[]>(urlHost);
  }

  postUtilizador(u: Utilizador): Observable<Utilizador> {
    return this.httpClient.post<Utilizador>(urlHost, JSON.stringify(u), httpOptions);
  }

  putUtilizador(u: Utilizador): Observable<Utilizador> {
    // var endpoint = urlHost + '/' + u._id;
    return this.httpClient.put<Utilizador>(urlHost, JSON.stringify(u), httpOptions);
  }


}
