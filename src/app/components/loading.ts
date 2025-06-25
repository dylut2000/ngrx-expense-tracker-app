import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectExpenseLoading } from '../store/selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'Loading',
  imports: [AsyncPipe],
  template: `
    @if (isLoading$ | async) {
    <div
      class="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-black/30 backdrop-blur-xs"
    >
      <p
        class="text-white text-3xl md:text-5xl font-thin animate-pulse mt-[-3rem]"
      >
        Loading...
      </p>
    </div>
    }
  `,
})
export class Loading {
  private store = inject(Store);

  isLoading$: Observable<boolean> = this.store.select(selectExpenseLoading);
}
