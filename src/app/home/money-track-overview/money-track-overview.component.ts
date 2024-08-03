import { Component, ViewEncapsulation } from '@angular/core';
import {HomeApiService} from "../home.api.service";
import {TransactionGetDto} from "../TransactionGetDto";

@Component({
  selector: 'app-money-track-overview',
  templateUrl: './money-track-overview.component.html',
  styleUrls: ['./money-track-overview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MoneyTrackOverviewComponent {
  budget: string = '1000 DT';
  revenuTotal: string = '1000 DT';
  expenseTotal: string = '1000 DT';
  transactions: TransactionGetDto[] = [];

  constructor(private readonly homeApiService: HomeApiService) {
    this.homeApiService.getTransactions().subscribe(transactions => {
      this.transactions = transactions;
    });
  }
}
