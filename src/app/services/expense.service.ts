import { inject, Injectable, isDevMode } from '@angular/core';
import { environment as prodEnvironment } from '../../environments/environment';
import { environment as devEnvironment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Expense, ExpenseData } from '../models/expense.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private expenseUrl = `${
    isDevMode() ? devEnvironment.API : prodEnvironment.API
  }/expenses`;
  private http = inject(HttpClient);

  // handle http error

  private handleError(error: any): Observable<never> {
    return throwError(
      () => new Error('An error occurred in the expense service.')
    );
  }

  // get all expenses

  getExpenses(): Observable<Expense[]> {
    return this.http
      .get<Expense[]>(this.expenseUrl)
      .pipe(catchError(this.handleError));
  }

  // add new expense

  addExpense(expense: ExpenseData): Observable<Expense> {
    const newExpense: Expense = {
      ...expense,
      id: uuidv4(),
    };
    return this.http
      .post<Expense>(this.expenseUrl, newExpense)
      .pipe(catchError(this.handleError));
  }

  // update existing expense

  updateExpense(expense: Expense): Observable<Expense> {
    return this.http
      .patch<Expense>(`${this.expenseUrl}/${expense.id}`, expense)
      .pipe(catchError(this.handleError));
  }

  // delete expense

  delete_expense(expenseId: string): Observable<{}> {
    return this.http
      .delete(`${this.expenseUrl}/${expenseId}`)
      .pipe(catchError(this.handleError));
  }
}
