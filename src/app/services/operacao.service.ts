import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Operacao } from '../models/operacao/operacao';

const urlHost = 'https://localhost:5001/api/Operacoes';
const url = 'https://mdfapi.azurewebsites.net/api/Operacoes';

const auxs = url;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class OperacaoService {

  constructor(private httpClient: HttpClient) { }

  getAllOperacoesMaquinas():  Observable<Operacao[]> {
    return   this.httpClient.get<Operacao[]>(auxs);
  }

  getOperacaoById(id): Observable<Operacao> {
    return this.httpClient.get<Operacao>(auxs + id);
  }

postOperacao (op: Operacao): Observable<Operacao> {
  return this.httpClient.post<Operacao>(auxs, JSON.stringify(op), httpOptions)
}
}
