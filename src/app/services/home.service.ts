import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { environment } from "../../environments/environment";
import { IHomeResponse } from "../interfaces/dashboard";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    return this.http.post("/microservice-auth/api/auth/v1.0/login", user);
  }

  findHome(): Observable<IHomeResponse> {
    return this.http.get<IHomeResponse>(`${environment.endpoint.access.home}/v1.0`);
  }
  
}