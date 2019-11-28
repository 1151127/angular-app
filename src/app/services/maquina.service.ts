import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Maquina } from '../models/maquina/maquina';


// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
// var express = require('express');
// var cors = require('cors');
// var app = express();

// app.use(cors());

const urlHost = 'https://localhost:5001/api/Maquinas';
const url = 'https://mdfapi.azurewebsites.net/api/Maquinas'


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})

export class MaquinaService {


  constructor(private httpClient: HttpClient) { }

  getAllMaquinas():  Observable<Maquina[]> {
    return   this.httpClient.get<Maquina[]>(url);
  }

  getMaquinaById(id): Observable<Maquina> {
    return this.httpClient.get<Maquina>(url + '/' + id);
  }

  postMaquina (m: Maquina): Observable<Maquina> {
    return this.httpClient.post<Maquina>(url, JSON.stringify(m), httpOptions); 
  }

  putMaquina (m: Maquina): Observable<Maquina> {
    console.log("OUYE");
    return  this.httpClient.put<Maquina>(url + '/' + JSON.stringify(m.maquinaId) , JSON.stringify(m), httpOptions);
  }
}
