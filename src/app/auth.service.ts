import { Injectable } from '@angular/core';
import { Utilisateur } from './utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


/*
  login(email: string, password: string) {
    
  }
  */
 
  constructor() { }
  public seConnecter(userInfo: Utilisateur){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }
  public estConnecte(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }
  public deconnecter(){
    localStorage.removeItem('ACCESS_TOKEN');
  }

}
