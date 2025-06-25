import { Injectable, signal, WritableSignal } from '@angular/core';
import { Expense } from '../models/expense.model';

@Injectable({
  providedIn: 'root',
})
export class EditFormService {
  isEditing: WritableSignal<boolean> = signal<boolean>(false);
  expense: WritableSignal<Expense | null> = signal<Expense | null>(null);

  toggleIsEditing(): void {
    this.isEditing.update((val) => !val);
    console.log(this.isEditing());
  }

  setExpense(value: Expense | null): void {
    this.expense.set(value);
  }
}
