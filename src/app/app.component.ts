import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <input type="text" placeholder="Enter the value, please:" [(ngModel)]="value">
    <div class="currencies" *ngIf="value">
      <p>&#x24;{{value| appCurrency:'usd'}}</p>
      <p>&#8364;{{value| appCurrency:'eur'}}</p>
      <p>{{value| appCurrency:'pln'}}zł</p>
      <p>{{value| appCurrency:'btc'}}&#8383;</p>
    </div>
  `,
})
export class AppComponent {
  title = 'pipe app';
  value = '';
}
