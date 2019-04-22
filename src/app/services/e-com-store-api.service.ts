import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { User } from '../entities/user';
import { Observable, BehaviorSubject } from 'rxjs';
import { Panier } from '../entities/panier';
// import { GiantBombGames } from '../entities/giant-bomb-games';



@Injectable({
  providedIn: 'root'
})
export class EComStoreApiService {
  apiDomain: string = "http://localhost:3000"
  token: string;
  responseLoginData: string;
  panier: Object;
  user:User;
  isLogged:Boolean=false;
  isloggedValidator:BehaviorSubject<Boolean> = new BehaviorSubject(false);
  // productList:BehaviorSubject<GiantBombGames[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }

  private getToken() {
    return this.token;
  }

  newUser(user) {
    return this.http.post<User>(`${this.apiDomain}users`, user)
  }
  login(user) {
    return this.http.post(`${this.apiDomain}/auth/login`, user);
  }

  getById(id){
    return this.http.get(`${this.apiDomain}/users/${id}`);
  }
 
}


