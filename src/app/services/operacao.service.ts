import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Operacao } from '../models/operacao/operacao';

const urlHost = 'https://localhost:5001/api/Operacoes';
const url = 'https://mdfapi.azurewebsites.net/api/Operacoes';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class OperacaoService {

  constructor(private httpClient: HttpClient) { }

  getAllOperacoesMaquinas():  Observable<Operacao[]> {
    return   this.httpClient.get<Operacao[]>(url);
  }

  getOperacaoById(id): Observable<Operacao> {
    return this.httpClient.get<Operacao>(url + id);
  }

postOperacao (op: Operacao): Observable<Operacao> {
  return this.httpClient.post<Operacao>(url, JSON.stringify(op), httpOptions)
}
}
