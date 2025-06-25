import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { ExpenseService } from '../services/expense.service';
import * as expenseActions from './actions';

@Injectable()
export class ExpenseEffects {
  private actions$ = inject(Actions);
  private expenseService = inject(ExpenseService);

  // load expense effect

  loadExpense$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(expenseActions.LOAD_EXPENSE),
      exhaustMap(() =>
        this.expenseService.getExpenses().pipe(
          map((expenses) => expenseActions.LOAD_EXPENSE_SUCCESS({ expenses })),
          catchError((error) =>
            of(expenseActions.LOAD_EXPENSE_FAILURE({ error }))
          )
        )
      )
    );
  });

  // add expense effect

  addExpense$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(expenseActions.ADD_EXPENSE),
      exhaustMap((action) =>
        this.expenseService.addExpense(action.expensedata).pipe(
          map((expense) => expenseActions.ADD_EXPENSE_SUCCESS({ expense })),
          catchError((error) =>
            of(expenseActions.ADD_EXPENSE_FAILURE({ error }))
          )
        )
      )
    );
  });

  // update expense effect

  updateExpense$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(expenseActions.UPDATE_EXPENSE),
      exhaustMap((action) =>
        this.expenseService.updateExpense(action.expense).pipe(
          map((expense) => expenseActions.UPDATE_EXPENSE_SUCCESS({ expense })),
          catchError((error) =>
            of(expenseActions.UPDATE_EXPENSE_FAILURE({ error }))
          )
        )
      )
    );
  });

  // delete expense effect

  deleteExpense$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(expenseActions.DELETE_EXPENSE),
      exhaustMap((action) =>
        this.expenseService.delete_expense(action.expenseId).pipe(
          map((expense) =>
            expenseActions.DELETE_EXPENSE_SUCCESS({
              expenseId: action.expenseId,
            })
          ),
          catchError((error) =>
            of(expenseActions.DELETE_EXPENSE_FAILURE({ error }))
          )
        )
      )
    );
  });
}
