import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {TransactionGetDto} from "src/app/core/dtos/transaction/transactionGetDto";
import {TransactionPostDto} from "src/app/core/dtos/transaction/transactionPostDto";
import {TransactionPatchDto} from "../dtos/transaction/transactionPatchDto";
import {AbstractApiService} from "./abstract.api.service";

@Injectable({
  providedIn: 'root'
})
export class TransactionApiService extends AbstractApiService {

  getTransactions(profileId: number): Observable<TransactionGetDto[]> {
    return this.get<TransactionGetDto[]>(`transactions/profile/${profileId.toString()}`);
  }

  addTransaction(transaction: TransactionPostDto): Observable<TransactionGetDto> {
    return this.post<TransactionGetDto>(`transactions`, transaction);
  }

  updateTransaction(id: number, transaction: TransactionPatchDto): Observable<TransactionGetDto> {
    return this.patch<TransactionGetDto>(`transactions/${id.toString()}`, transaction);
  }

  deleteTransaction(transactionId: number): Observable<void> {
    return this.delete<void>(`transactions/${transactionId.toString()}`);
  }
}
