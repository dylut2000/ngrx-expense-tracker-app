export type ExpenseCategory = 'Expense' | 'Income';

export interface Expense {
  id: string;
  description: string;
  amount: number;
  category: ExpenseCategory;
  date: string;
}

export interface ExpenseState {
  items: Expense[];
  loading: boolean;
  error: string | null;
}

export type ExpenseData = Omit<Expense, 'id'>;
