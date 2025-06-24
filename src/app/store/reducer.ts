import { createReducer, on } from '@ngrx/store';
import { ExpenseState } from '../models/expense.model';
import * as expenseActions from './actions';

export const expensesFeatureKey = 'expenses';

export const initialState: ExpenseState = {
  items: [],
  loading: false,
  error: null,
};

export const expenseReducer = createReducer(
  initialState,

  on(expenseActions.LOAD_EXPENSE, (state) => ({ ...state, loading: true })),

  on(expenseActions.LOAD_EXPENSE_SUCCESS, (state, payload) => ({
    ...state,
    loading: false,
    items: payload.expenses,
  })),

  on(expenseActions.LOAD_EXPENSE_FAILURE, (state, payload) => ({
    ...state,
    loading: false,
    error: payload.error.message,
  })),

  on(expenseActions.ADD_EXPENSE, (state) => ({
    ...state,
    loading: true,
  })),

  on(expenseActions.ADD_EXPENSE_SUCCESS, (state, payload) => ({
    ...state,
    items: [...state.items, payload.expense],
    loading: false,
  })),

  on(expenseActions.ADD_EXPENSE_FAILURE, (state, payload) => ({
    ...state,
    error: payload.error.message,
    loading: false,
  })),

  on(expenseActions.UPDATE_EXPENSE, (state) => ({
    ...state,
    loading: true,
  })),

  on(expenseActions.UPDATE_EXPENSE_SUCCESS, (state, payload) => ({
    ...state,
    items: state.items.map((item) =>
      item.id === payload.expense.id ? payload.expense : item
    ),
    loading: false,
  })),

  on(expenseActions.UPDATE_EXPENSE_FAILURE, (state, payload) => ({
    ...state,
    error: payload.error.message,
    loading: false,
  })),

  on(expenseActions.DELETE_EXPENSE, (state) => ({ ...state, loading: true })),

  on(expenseActions.DELETE_EXPENSE_SUCCESS, (state, payload) => ({
    ...state,
    loading: false,
    items: state.items.filter((item) => item.id !== payload.expenseId),
  })),

  on(expenseActions.DELETE_EXPENSE_FAILURE, (state, payload) => ({
    ...state,
    loading: false,
    error: payload.error.message,
  }))
);
