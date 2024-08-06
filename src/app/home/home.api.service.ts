import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {TransactionGetDto} from "./TransactionGetDto";
import {HttpClient} from "@angular/common/http";
import {ProfilGetDto} from './ProfilGetDto';

@Injectable({
  providedIn: 'root'
})
export class HomeApiService {
  url: string = 'http://localhost:8081/';
  constructor(public http: HttpClient) { }

  getTransactions(): Observable<TransactionGetDto[]> {
    return this.http.get<TransactionGetDto[]>(`${this.url}transactions`);
  }

  getProfil(id: number = 1): Observable<ProfilGetDto> {
    return this.http.get<any>(`${this.url}profils/${id}`);
  }
}
