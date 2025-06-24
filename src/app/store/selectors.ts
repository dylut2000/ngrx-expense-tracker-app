import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ExpenseState } from '../models/expense.model';
import * as fromExpenses from './reducer';

export const selectExpenseState = createFeatureSelector<ExpenseState>(
  fromExpenses.expensesFeatureKey
);

export const selectAllExpenses = createSelector(
  selectExpenseState,
  (state) => state.items
);

export const selectExpenseLoading = createSelector(
  selectExpenseState,
  (state) => state.loading
);

export const selectExpenseError = createSelector(
  selectExpenseState,
  (state) => state.error
);

export const selectIncomeItems = createSelector(selectAllExpenses, (expenses) =>
  expenses.filter((item) => item.category === 'Income')
);

export const selectExpenseItems = createSelector(
  selectAllExpenses,
  (expenses) => expenses.filter((item) => item.category !== 'Income')
);

export const selectTotalIncome = createSelector(selectIncomeItems, (incomes) =>
  incomes.reduce((acc, value) => acc + value.amount, 0)
);

export const selectTotalExpense = createSelector(
  selectExpenseItems,
  (expenses) => expenses.reduce((acc, value) => acc + value.amount, 0)
);

export const selectNetbalance = createSelector(
  selectTotalIncome,
  selectTotalExpense,
  (totalIncome, totalExpense) => totalIncome - totalExpense
);
