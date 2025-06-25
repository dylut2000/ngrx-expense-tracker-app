import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as expenseSelectors from '../store/selectors';
import { AsyncPipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'Report',
  imports: [AsyncPipe, CurrencyPipe],
  template: `
    <div class="w-full grid grid-cols-3 mt-4 gap-1">
      <div
        class="h-20 bg-sky-500 text-white flex flex-col justify-center items-center gap-1 overflow-hidden"
      >
        <div class="font-thin">Income</div>
        <div class="font-bold text-lg">
          {{ totalIncome$ | async | currency : 'R' }}
        </div>
      </div>
      <div
        class="h-20 bg-red-500 text-white flex flex-col justify-center items-center gap-1 overflow-hidden"
      >
        <div class="font-thin">Expense</div>
        <div class="font-bold text-lg">
          {{ totalExpense$ | async | currency : 'R' }}
        </div>
      </div>
      <div
        class="h-20 bg-teal-600 text-white flex flex-col justify-center items-center gap-1 overflow-hidden"
      >
        <div class="font-thin">Balance</div>
        <div class="font-bold text-lg">
          {{ netBalance$ | async | currency : 'R' }}
        </div>
      </div>
    </div>
  `,
})
export class Report implements OnInit {
  private store = inject(Store);

  totalIncome$!: Observable<number>;
  totalExpense$!: Observable<number>;
  netBalance$!: Observable<number>;

  ngOnInit(): void {
    this.netBalance$ = this.store.select(expenseSelectors.selectNetbalance);
    this.totalExpense$ = this.store.select(expenseSelectors.selectTotalExpense);
    this.totalIncome$ = this.store.select(expenseSelectors.selectTotalIncome);
  }
}
