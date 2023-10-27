import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  
  isLogged(){
    let resul = false;
    if(localStorage.getItem('authToken')){
        resul = true;
    }
    return resul;
  }

}