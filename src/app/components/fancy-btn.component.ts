import { Component } from '@angular/core';

@Component({
  selector: 'app-fancy-btn',
  template: `<button>
    <ng-content></ng-content>
  </button>`,
})
export class FancyBtnComponent {}
