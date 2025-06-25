import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'Report',
  imports: [],
  template: `
    <div class="w-full grid grid-cols-3 mt-4 gap-1">
      <div
        class="h-20 bg-sky-500 text-white flex flex-col justify-center items-center gap-1 overflow-hidden"
      >
        <div class="font-thin">Income</div>
        <div class="font-bold text-lg">R20.00</div>
      </div>
      <div
        class="h-20 bg-red-500 text-white flex flex-col justify-center items-center gap-1 overflow-hidden"
      >
        <div class="font-thin">Expense</div>
        <div class="font-bold text-lg">R20.00</div>
      </div>
      <div
        class="h-20 bg-teal-500 text-white flex flex-col justify-center items-center gap-1 overflow-hidden"
      >
        <div class="font-thin">Balance</div>
        <div class="font-bold text-lg">R20.00</div>
      </div>
    </div>
  `,
})
export class Report {
  private store = inject(Store);

  totalIncome$!: Observable<number>;
  totalExpense$!: Observable<number>;
  netBalance$!: Observable<number>;
}
