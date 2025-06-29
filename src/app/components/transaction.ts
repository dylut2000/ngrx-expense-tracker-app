import { Component, inject, input } from '@angular/core';
import { Expense } from '../models/expense.model';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { DELETE_EXPENSE } from '../store/actions';
import { EditFormService } from '../services/editForm.service';

@Component({
  selector: 'Transaction',
  imports: [DatePipe, CurrencyPipe],
  template: `
    @if (transaction()) {
    <div
      class="w-full h-16 bg-slate-50 relative flex items-center gap-1.5 md:gap-4 px-2"
    >
      <div
        class="absolute top-0 left-0 text-[8px] font-thin w-12 text-center text-white"
        [class]="
          transaction().category == 'Expense'
            ? 'bg-red-500/70'
            : 'bg-teal-500/70'
        "
      >
        {{ transaction().category }}
      </div>
      <div class="absolute bottom-0 left-1 text-[8px] font-thin px-1">
        {{ transaction().date | date }}
      </div>

      <div class="flex-1 overflow-hidden">
        <p class="w-full truncate text-slate-500">
          {{ transaction().description }}
        </p>
      </div>
      <div class="md:font-bold text-slate-500">
        {{ transaction().amount | currency : 'R' }}
      </div>
      <div class="text-slate-700">
        <button class="p-2 shadow cursor-pointer" (click)="onHandleEdit()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-pen"
            viewBox="0 0 16 16"
          >
            <path
              d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"
            />
          </svg>
        </button>
        <button class="p-2 shadow cursor-pointer" (click)="onHandleDelete()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-trash3"
            viewBox="0 0 16 16"
          >
            <path
              d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"
            />
          </svg>
        </button>
      </div>
    </div>
    }
  `,
})
export class Transaction {
  private store = inject(Store);
  editFormService: EditFormService = inject(EditFormService);

  transaction = input.required<Expense>();

  onHandleEdit(): void {
    console.log('handle edit');
    this.editFormService.setExpense(this.transaction());
  }

  onHandleDelete(): void {
    this.store.dispatch(DELETE_EXPENSE({ expenseId: this.transaction().id }));
  }
}
