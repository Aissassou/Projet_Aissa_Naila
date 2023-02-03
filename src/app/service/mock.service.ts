import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from '../model/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  public isConnected: boolean = false;

  constructor(private http: HttpClient) {
  }

  public getConfig() {
    return this.http.get<Utilisateur>('login');
  }
  
}
