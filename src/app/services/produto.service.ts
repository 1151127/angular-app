import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Operacao } from '../models/operacao/operacao';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto/produto';

const urlHost = 'https://localhost:5001/api/Produto';
const url = 'https://mdpapi.azurewebsites.net/api/Produto'


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private httpClient: HttpClient) { }


  getAllProdutos():  Observable<Produto[]> {
    return   this.httpClient.get<Produto[]>(url);
  }

  getProdutoById(id): Observable<Produto> {
    return this.httpClient.get<Produto>(url + id);
  }

  postProduto (p: Produto): Observable<Produto> {
    return this.httpClient.post<Produto>(url, JSON.stringify(p), httpOptions);
  }


}
