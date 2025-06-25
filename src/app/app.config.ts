import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ActionReducer, provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient } from '@angular/common/http';

import { ExpenseEffects } from './store/effects';
import { expenseReducer, expensesFeatureKey } from './store/reducer';
import { localStorageSync } from 'ngrx-store-localstorage';

function expenseLocalStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: [expensesFeatureKey],
    rehydrate: true,
    storage: window.localStorage,
  })(reducer);
}

const metaReducers = [expenseLocalStorageSyncReducer];

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({}, { metaReducers }),
    provideState(expensesFeatureKey, expenseReducer),
    provideEffects([ExpenseEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
