import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {TransactionGetDto} from "./TransactionGetDto";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HomeApiService {

  constructor(public http: HttpClient) { }

  getTransactions(): Observable<TransactionGetDto[]> {
    return this.http.get<TransactionGetDto[]>('http://localhost:8080/transactions');
  }
}
