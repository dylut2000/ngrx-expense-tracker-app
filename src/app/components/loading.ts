import { Component } from '@angular/core';

@Component({
  selector: 'Loading',
  imports: [],
  template: `
    @if (false) {
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
export class Loading {}
