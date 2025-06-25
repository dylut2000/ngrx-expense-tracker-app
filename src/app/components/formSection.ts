import { Component, inject, effect } from '@angular/core';
import { Store } from '@ngrx/store';
import { ExpenseCategory } from '../models/expense.model';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import * as expenseActions from '../store/actions';

@Component({
  selector: 'FormSection',
  imports: [ReactiveFormsModule],
  template: `
    <form
      [formGroup]="form"
      class="w-full bg-slate-100 h-auto my-2 sticky top-0 z-20 flex flex-col p-2 md:p-4 shadow"
    >
      <h1 class="font-bold mb-2">Add new transaction</h1>
      <input type="hidden" formControlName="id" />

      <div class="w-full flex flex-col md:grid md:grid-cols-2 gap-1">
        <div>
          <input
            type="text"
            formControlName="description"
            class="w-full bg-white p-2 outline-none placeholder-slate-400"
            placeholder="Description"
          />
        </div>
        <div>
          <input
            type="number"
            formControlName="amount"
            class="w-full bg-white p-2 outline-none placeholder-slate-400"
            min="0"
            placeholder="Amount"
          />
        </div>
        <div>
          <select
            type="text"
            formControlName="category"
            class="w-full bg-white p-2 outline-none placeholder-slate-400"
            placeholder="Category"
          >
            @for (option of expenseCategory; track $index) {
            <option [value]="option">{{ option }}</option>
            }
          </select>
        </div>
        <div>
          <input
            type="date"
            formControlName="date"
            class="w-full bg-white p-2 outline-none placeholder-slate-400"
            placeholder="Date"
          />
        </div>
      </div>
      <div class="text-right mt-4">
        @if(false) {
        <button
          type="button"
          (click)="onReset()"
          class="px-6 py-1 bg-slate-700 hover:opacity-90 text-slate-50 cursor-pointer mb-1"
        >
          CLOSE
        </button>
        <button
          (click)="onEdit()"
          class="px-6 py-1 bg-slate-900 hover:opacity-90 text-slate-50 cursor-pointer mb-1"
        >
          SAVE
        </button>
        }@else {
        <button
          (click)="onSubmit()"
          class="px-6 py-1 bg-slate-900 hover:opacity-90 text-slate-50 cursor-pointer mb-1"
        >
          ADD
        </button>

        }
      </div>
    </form>
  `,
})
export class FormSection {
  private store = inject(Store);
  fb: FormBuilder = inject(FormBuilder);

  expenseCategory: ExpenseCategory[] = ['Expense', 'Income'];

  form = this.fb.nonNullable.group({
    id: '',
    description: ['', Validators.required],
    amount: [0, [Validators.required, Validators.min(0)]],
    category: [this.expenseCategory[0], Validators.required],
    date: [new Date().toISOString().split('T')[0], Validators.required],
  });

  onSubmit(): void {
    if (this.form.invalid) return;

    this.store.dispatch(
      expenseActions.ADD_EXPENSE({ expensedata: this.form.getRawValue() })
    );
    this.onReset();
  }

  onReset(): void {
    this.form.reset();
  }

  onEdit(): void {
    console.log('edit');
  }
}
