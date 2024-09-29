import {Component} from '@angular/core';
import {TransactionApiService} from "../../core/apis/transaction.api.service";
import {TransactionGetDto} from "../../core/dtos/transaction/transactionGetDto";
import {TransactionPostDto} from "../../core/dtos/transaction/transactionPostDto";
import {AbstractCustomModalDirective} from "../../shared/custom-modal/abstract-custom-modal.directive";

@Component({
  selector: 'app-add-transaction-modal',
  templateUrl: './add-transaction-modal.component.html',
  styleUrls: ['./add-transaction-modal.component.scss']
})
export class AddTransactionModalComponent extends AbstractCustomModalDirective {
  profileId: number = -1;
  transaction: TransactionGetDto = {
    id: 0,
    amount: 0,
    date: '',
    comment: '',
    categoryId: 0
  };

  constructor(private readonly transactionApiService: TransactionApiService) {
    super();
  }

  onSave() {
    if (!this.transaction) {
      return;
    }
    const postTransaction: TransactionPostDto = {
      amount: this.transaction.amount,
      date: this.transaction.date,
      categoryId: this.transaction.categoryId,
      comment: this.transaction.comment,
      profileId: this.profileId
    }
    this.transactionApiService.addTransaction(postTransaction).subscribe({
      next: () => {
        this.onResult();
      },
      error: () => {
      },
    });
  }
}
