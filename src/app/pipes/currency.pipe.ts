import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'appCurrency'
})

export class CurrenciesPipe implements PipeTransform {
  transform(value: any, currency: string): any {
    switch (currency) {
      case 'usd':
        return convertCurrency(value, 2);
      case 'eur':
        return convertCurrency(value, 3);
      case 'pln':
        return convertCurrency(value, 4);
      case 'btc':
        return convertCurrency(value, 8);
      default: return value;
    }
  }
}

function convertCurrency(val: any, iteration: number) {

  let num: any = val.split('');
  if ((val.length) <= iteration) {
    for (let i = val.length - 1; i < iteration; i++) {
      num.unshift('0');
    }
  }
  num.splice(num.length - iteration, 0, '.');
  num = num.join('');
  return num;
}
