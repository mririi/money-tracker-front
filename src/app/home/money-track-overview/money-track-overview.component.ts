import { Component, ViewEncapsulation } from '@angular/core';

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
  expenses: any[] = [
    {
      name: 'Loyer',
      amount: '200 DT'
    },
    {
      name: 'Courses',
      amount: '200 DT'
    },
    {
      name: 'Sorties',
      amount: '200 DT'
    },
    {
      name: 'Factures',
      amount: '200 DT'
    },
    {
      name: 'Autres',
      amount: '200 DT'
    }
  ];
}
