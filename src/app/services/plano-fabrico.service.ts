import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PlanoFabrico } from '../models/planofabrico/planofabrico';
import { Observable } from 'rxjs';


const urlHost = 'https://localhost:5001/api/PlanosFabricos';
const url = 'https://mdpapi.azurewebsites.net/api/PlanosFabricos'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const auxs = url;

@Injectable({
  providedIn: 'root'
})
export class PlanoFabricoService {

  constructor(private httpClient: HttpClient) { }

  
  getAllPlanosFabricos():  Observable<PlanoFabrico[]> {
    return   this.httpClient.get<PlanoFabrico[]>(auxs);
  }

  getPlanoFabricoById(id): Observable<PlanoFabrico> {
    return this.httpClient.get<PlanoFabrico>(auxs + id);
  }

  postPlanoFabrico (pf: PlanoFabrico): Observable<PlanoFabrico> {
    return this.httpClient.post<PlanoFabrico>(auxs, JSON.stringify(pf), httpOptions);
  }

}
