import { Component } from '@angular/core';

@Component({
  selector: 'FormSection',
  imports: [],
  template: `
    <form
      class="w-full bg-slate-100 h-auto my-2 sticky top-0 z-20 flex flex-col p-2 md:p-4 shadow"
    >
      <h1 class="font-bold mb-2">Add new transaction</h1>

      <div class="w-full flex flex-col md:grid md:grid-cols-2 gap-1">
        <div>
          <input
            type="text"
            class="w-full bg-white p-2 outline-none placeholder-slate-400"
            placeholder="Description"
          />
        </div>
        <div>
          <input
            type="number"
            class="w-full bg-white p-2 outline-none placeholder-slate-400"
            placeholder="Amount"
          />
        </div>
        <div>
          <input
            type="text"
            class="w-full bg-white p-2 outline-none placeholder-slate-400"
            placeholder="Category"
          />
        </div>
        <div>
          <input
            type="date"
            class="w-full bg-white p-2 outline-none placeholder-slate-400"
            placeholder="Date"
          />
        </div>
      </div>
      <div class="text-right mt-4">
        <button
          class="px-6 py-1 bg-slate-900 hover:opacity-90 text-slate-50 cursor-pointer mb-1"
        >
          ADD
        </button>
      </div>
    </form>
  `,
})
export class FormSection {}
