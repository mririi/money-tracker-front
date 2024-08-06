import { Component, ViewEncapsulation } from '@angular/core';
import {HomeApiService} from "../home.api.service";
import {TransactionGetDto} from "../TransactionGetDto";
import {TransactionPostDto} from '../TransactionPostDto';

@Component({
  selector: 'app-money-track-overview',
  templateUrl: './money-track-overview.component.html',
  styleUrls: ['./money-track-overview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MoneyTrackOverviewComponent {
  balance: string = '0 DT';
  revenuTotal: string = '0 DT';
  expenseTotal: string = '0 DT';
  transactions: TransactionGetDto[] = [];
  visible: boolean = false;
  transaction: TransactionPostDto = {
    amount: 0,
    type: 'INCOME',
    name: '',
    category: ''
  };

  constructor(private readonly homeApiService: HomeApiService) {
    this.homeApiService.getTransactions().subscribe(transactions => {
      this.transactions = transactions;
    });
    this.homeApiService.getProfil().subscribe(profil => {
      this.balance = profil.balance + ' DT';
      this.revenuTotal = profil.totalIncome + ' DT';
      this.expenseTotal = profil.totalExpense + ' DT';
    });
  }

  getSeverity(type: string) {
    switch (type) {
      case 'INCOME':
        return 'success';
      case 'EXPENSE':
        return 'danger';
      default:
        return;
    }
  }

  onAddTransaction() {
    this.visible = true;
  }
}
