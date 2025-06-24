import { Component } from '@angular/core';
import { Report } from './components/report';
import { FormSection } from './components/formSection';
import { List } from './components/list';

@Component({
  selector: 'app-root',
  imports: [Report, FormSection, List],
  styles: '',
  template: `
    <div
      class="relative w-full md:w-[50rem] h-screen px-2 md:px-8 pt-2 mx-auto flex flex-col overflow-y-scroll"
    >
      <h1 class="text-center text-4xl">Expense Tracker</h1>
      <Report></Report>
      <FormSection></FormSection>

      <div
        class="w-full flex-1 overflow-y-scroll overflow-x-hidden bg-slate-100 shadow"
      >
        <List></List>
      </div>
    </div>
  `,
})
export class AppComponent {}
