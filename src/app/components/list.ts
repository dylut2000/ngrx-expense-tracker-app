import { Component, inject, OnInit } from '@angular/core';
import { Transaction } from './transaction';
import { Observable } from 'rxjs';
import { Expense } from '../models/expense.model';
import { Store } from '@ngrx/store';
import * as expenseSelectors from '../store/selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'List',
  imports: [Transaction, AsyncPipe],
  template: `
    <div class="w-full flex flex-col gap-1 p-2 md:p-4 relative">
      <h1 class="font-bold mb-2 sticky top-0 bg-slate-100 z-20">
        Transactions
      </h1>

      @for (item of allExpenses$ | async; track $index) {
      <Transaction [transaction]="item" />
      }@empty {
      <div class="w-full flex justify-center items-center h-28">
        <h1 class="text-3xl md:text-5xl text-slate-200 font-bold">
          No Trasactions
        </h1>
      </div>
      }
    </div>
  `,
})
export class List implements OnInit {
  private store = inject(Store);

  allExpenses$!: Observable<Expense[]>;

  ngOnInit(): void {
    this.allExpenses$ = this.store.select(expenseSelectors.selectAllExpenses);
  }
}
