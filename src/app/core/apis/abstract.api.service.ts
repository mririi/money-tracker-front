import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractApiService {
  headers: HttpHeaders = new HttpHeaders({
    'Authorization': `${localStorage.getItem('acces_token')}`
  });

  constructor(public http: HttpClient) {
  }

  get<T>(url: string, params: HttpParams = {} as HttpParams): Observable<T> {
    return this.http.get<T>(environment.apiUrl + url, {
      headers: this.headers,
      params: params
    });
  }

  post<T>(url: string, body: any, noHeaders: boolean = false, params: HttpParams = {} as HttpParams): Observable<T> {
    return this.http.post<T>(environment.apiUrl + url, body, noHeaders ? {} : {
      headers: this.headers,
      params: params
    });
  }

  put<T>(url: string, body: any, params: HttpParams = {} as HttpParams): Observable<T> {
    return this.http.put<T>(environment.apiUrl + url, body, {
      headers: this.headers,
      params: params
    });
  }

  patch<T>(url: string, body: any, params: HttpParams = {} as HttpParams): Observable<T> {
    return this.http.patch<T>(environment.apiUrl + url, body, {
      headers: this.headers,
      params: params
    });
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(environment.apiUrl + url, {
      headers: this.headers
    });
  }
}
