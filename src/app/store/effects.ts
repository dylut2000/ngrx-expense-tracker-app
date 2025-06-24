import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { ExpenseService } from '../services/expense.service';

@Injectable()
export class ExpenseEffects {
  private actions$ = inject(Actions);
  private expenseService = inject(ExpenseService);

  // load expense effect

  loadExpense$ = createEffect(() => {
    return this.actions$.pipe();
  });

  // add expense effect

  addExpense$ = createEffect(() => {
    return this.actions$.pipe();
  });

  // update expense effect

  updateExpense$ = createEffect(() => {
    return this.actions$.pipe();
  });

  // delete expense effect

  deleteExpense$ = createEffect(() => {
    return this.actions$.pipe();
  });
}
