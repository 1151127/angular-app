import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PlanoFabrico } from '../models/planofabrico/planofabrico';
import { Observable } from 'rxjs';


const url = 'https://localhost:5001/api/PlanosFabricos';
const urlHost = 'https://mdpapi.azurewebsites.net/api/PlanosFabricos'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};



@Injectable({
  providedIn: 'root'
})
export class PlanoFabricoService {

  constructor(private httpClient: HttpClient) { }

  
  getAllPlanosFabricos():  Observable<PlanoFabrico[]> {
    return   this.httpClient.get<PlanoFabrico[]>(urlHost);
  }

  getPlanoFabricoById(id): Observable<PlanoFabrico> {
    return this.httpClient.get<PlanoFabrico>(urlHost + id);
  }

  postPlanoFabrico (pf: PlanoFabrico): Observable<PlanoFabrico> {
    return this.httpClient.post<PlanoFabrico>(urlHost, JSON.stringify(pf), httpOptions);
  }

}
