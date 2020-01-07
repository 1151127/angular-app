import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( ) { }

  private clientStatus: BehaviorSubject<number> = new BehaviorSubject(0);
  private clientId: BehaviorSubject<string> = new BehaviorSubject('');
  public state = this.clientStatus.asObservable();
  public id = this.clientId.asObservable();

  public setState(value: number, id: string) {
    this.clientStatus.next(value); 
    this.clientId.next(id);
}
}
