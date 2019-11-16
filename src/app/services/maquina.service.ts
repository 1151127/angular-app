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

@Injectable({
  providedIn: 'root'
})

export class MaquinaService {


  constructor(private httpClient: HttpClient) { }

  getAllMaquinas() {
    console.log(urlHost);
    console.log(this.httpClient.get<Maquina[]>(urlHost));

    return this.httpClient.get<Maquina[]>(urlHost);
  }




  getMaquinaById(id): Observable<Maquina> {
    return this.httpClient.get<Maquina>(urlHost + id);
  }


}
