import { Injectable } from "@angular/core";
import { HttpClient, HttpParams,  } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { environment } from "../../environments/environment";
import { IRegister } from "../interfaces/consulting";

@Injectable({
  providedIn: "root",
})
export class ConsultingService {
  constructor(private http: HttpClient) {}

  register(iregister: IRegister): Observable<any> {
    return this.http.post<IRegister>(`${environment.endpoint.scheduling.consulting}/api/consulting/v1.0/`, iregister);
  }

  findById(idConsulting: string): Observable<any>{
    return this.http.get<any>(`${environment.endpoint.scheduling.consulting}/api/consulting/v1.0/${idConsulting}`);
  }

  findAll(queryParams: any): Observable<any>{
    console.log("PARAMS", JSON.stringify(queryParams))
    return this.http.get<any>(`${environment.endpoint.scheduling.consulting}/api/consulting/v1.0?`, {
      params: queryParams
    })
  }
  
}