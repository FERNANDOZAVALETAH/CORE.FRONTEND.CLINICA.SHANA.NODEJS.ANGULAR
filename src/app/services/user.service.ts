import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { environment } from "../../environments/environment";
import { IUserResponse } from "../interfaces/user";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  findById(idUser): Observable<IUserResponse> {
    return this.http.get<IUserResponse>(`${environment.endpoint.access.home}/v1.0/${idUser}`);
  }

  findByType(): Observable<IUserResponse> {
    return this.http.get<IUserResponse>(`${environment.endpoint.access.home}/v1.0`);
  }
  
}