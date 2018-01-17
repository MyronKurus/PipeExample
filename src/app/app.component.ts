import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <input type="text" placeholder="Enter the value, please:" [(ngModel)]="value">
    <div class="currencies" *ngIf="value">
      <p>{{value| appCurrency:'usd'}}</p>
      <p>{{value| appCurrency:'eur'}}</p>
      <p>{{value| appCurrency:'pln':'right'}}</p>
      <p>{{value| appCurrency:'btc'}}</p>
      <p>{{value| appCurrency:'uah'}}</p>
      <p>{{value| appCurrency:'uah':'right'}}</p>
    </div>
  `,
})
export class AppComponent {
  title = 'pipe app';
  value = '';
}
