import { Component } from '@angular/core';
import { Transaction } from './transaction';

@Component({
  selector: 'List',
  imports: [Transaction],
  template: `
    <div class="w-full flex flex-col gap-1 p-2 md:p-4 relative">
      <h1 class="font-bold mb-2 sticky top-0 bg-slate-100 z-20">
        Transactions
      </h1>
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
    </div>
  `,
})
export class List {}
