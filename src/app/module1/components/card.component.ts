import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <div class="header">
        <!-- 使用 custom element -->
        <ng-content select="header"></ng-content>
      </div>
      <div class="content">
        <!-- 使用 custom class -->
        <ng-content select=".content"></ng-content>
      </div>
      <div class="footer">
        <ng-content select="footer"></ng-content>
      </div>
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .card {
        min-width: 280px;
        margin: 5px;
      }
      .header {
        color: blue;
      }
    `,
  ],
})
export class CardComponent {}
