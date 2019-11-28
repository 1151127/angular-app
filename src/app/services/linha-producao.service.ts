import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LinhaProducao } from '../models/linhaproducao/linhaproducao';


const urlHost = 'https://localhost:5001/api/LinhasProducoes';
const url = 'https://mdfapi.azurewebsites.net/api/LinhasProducoes'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class LinhaProducaoService {

  constructor(private httpClient: HttpClient) { }

  getAllLinhasProducoes(): Observable<LinhaProducao[]> {
    return   this.httpClient.get<LinhaProducao[]>(url);
  }

  getLinhaProducaoById(id): Observable<LinhaProducao> {
    return this.httpClient.get<LinhaProducao>(url + id);
  }

  postLinhaProducao (lp: LinhaProducao): Observable<LinhaProducao> {
    return this.httpClient.post<LinhaProducao>(url, JSON.stringify(lp), httpOptions);
  }

}
