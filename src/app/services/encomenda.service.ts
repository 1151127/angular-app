import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Encomenda } from '../models/encomenda/encomenda';



const urlHost = 'https://webapige.herokuapp.com/api/Encomenda';

const urlGetByClient = 'https://webapige.herokuapp.com/api/encomenda/cliente';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class EncomendaService {

  constructor(private httpClient: HttpClient) { }


  getAllByClient(id): Observable<Encomenda[]> {
    return this.httpClient.get<Encomenda[]>(urlGetByClient + '/' + id);
  }

  getAllEncomendas():  Observable<Encomenda[]> {
    return  this.httpClient.get<Encomenda[]>(urlHost);
  }

  getEncomendaById(id): Observable<Encomenda> {
    return this.httpClient.get<Encomenda>(urlHost + '/' + id);
  }

  delEncomenda(id): Observable<Encomenda> {
     return this.httpClient.delete<Encomenda>(urlHost + '/'  + id, httpOptions );
  }

  postEncomenda  (e: Encomenda ): Observable<Encomenda > {
    return this.httpClient.post<Encomenda >(urlHost, JSON.stringify(e), httpOptions);
  }

  putEncomenda (e: Encomenda): Observable<Encomenda> {
    return  this.httpClient.put<Encomenda>(urlHost + '/' + e._id, JSON.stringify(e), httpOptions);
  }
}
