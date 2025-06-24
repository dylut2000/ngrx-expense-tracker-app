import { Component } from '@angular/core';
import { Summary } from './components/summary';
import { FormSection } from './components/formSection';
import { List } from './components/list';

@Component({
  selector: 'app-root',
  imports: [Summary, FormSection, List],
  styles: '',
  template: `
    <div>
      <Summary></Summary>
      <FormSection></FormSection>
      <List></List>
    </div>
  `,
})
export class AppComponent {}
