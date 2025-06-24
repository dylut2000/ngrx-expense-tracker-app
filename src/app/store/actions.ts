import { createAction, props } from '@ngrx/store';
import { Expense, ExpenseData } from '../models/expense.model';

// loading

export const LOAD_EXPENSE = createAction('[Expense page] Load our expense');

export const LOAD_EXPENSE_SUCCESS = createAction(
  '[Expense API] Load expenses success',
  props<{ expenses: Expense[] }>()
);

export const LOAD_EXPENSE_FAILURE = createAction(
  '[Expense API] Load expenses failure',
  props<{ error: any }>()
);

// add

export const ADD_EXPENSE = createAction(
  '[Expense page] Add expense',
  props<{ expensedata: ExpenseData }>()
);

export const ADD_EXPENSE_SUCCESS = createAction(
  '[Expense API] Add expense success',
  props<{ expense: Expense }>()
);

export const ADD_EXPENSE_FAILURE = createAction(
  '[Expense API] Add expense failure',
  props<{ error: any }>()
);

// update

export const UPDATE_EXPENSE = createAction(
  '[Expense Page] Update expense',
  props<{ expense: Expense }>()
);

export const UPDATE_EXPENSE_SUCCESS = createAction(
  '[Expense API] Update expense success',
  props<{ expense: Expense }>()
);

export const UPDATE_EXPENSE_FAILURE = createAction(
  '[Expense API] Update expense failure',
  props<{ error: any }>()
);

// delete

export const DELETE_EXPENSE = createAction(
  '[Expense Page] Delete expense',
  props<{ expenseId: string }>()
);

export const DELETE_EXPENSE_SUCCESS = createAction(
  '[Expense Page] Delete expense success',
  props<{ expenseId: string }>()
);

export const DELETE_EXPENSE_FAILURE = createAction(
  '[Expense Page] Delete expense failure',
  props<{ error: any }>()
);
