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

const url = 'https://localhost:5001/api/Maquinas';
const urlHost = 'https://mdfapi.azurewebsites.net/api/Maquinas'


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})

export class MaquinaService {


  constructor(private httpClient: HttpClient) { }

  getAllMaquinas():  Observable<Maquina[]> {
    return   this.httpClient.get<Maquina[]>(urlHost);
  }

  getMaquinaById(id): Observable<Maquina> {
    return this.httpClient.get<Maquina>(urlHost + '/' + id);
  }

  postMaquina (m: Maquina): Observable<Maquina> {
    return this.httpClient.post<Maquina>(urlHost, JSON.stringify(m), httpOptions); 
  }

  putMaquina (m: Maquina): Observable<Maquina> {
    console.log("OUYE");
    return  this.httpClient.put<Maquina>(urlHost + '/' + JSON.stringify(m.maquinaId) , JSON.stringify(m), httpOptions);
  }
}
