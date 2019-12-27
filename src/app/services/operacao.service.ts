import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Operacao } from '../models/operacao/operacao';

const url = 'https://localhost:5001/api/Operacoes';
const urlHost = 'https://mdfapi.azurewebsites.net/api/Operacoes';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class OperacaoService {

  constructor(private httpClient: HttpClient) { }

  getAllOperacoesMaquinas():  Observable<Operacao[]> {
    return   this.httpClient.get<Operacao[]>(urlHost);
  }

  getOperacaoById(id): Observable<Operacao> {
    return this.httpClient.get<Operacao>(urlHost + id);
  }

postOperacao (op: Operacao): Observable<Operacao> {
  return this.httpClient.post<Operacao>(urlHost, JSON.stringify(op), httpOptions)
}
}
