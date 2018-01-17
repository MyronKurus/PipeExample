import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'appCurrency'
})

export class CurrenciesPipe implements PipeTransform {
  transform(value: any, currency: string, position: string = 'left'): any {
    switch (currency) {
      case 'usd':
        return '\u0024' + convertCurrency(value, 2);
      case 'eur':
        return '\u20AC' + convertCurrency(value, 3);
      case 'pln':
        return (position === 'left') ? 'zł' + convertCurrency(value, 4) : convertCurrency(value, 4) + 'zł';
      case 'btc':
        return (position === 'left') ? '\u20BF' + convertCurrency(value, 8) : convertCurrency(value, 8) + '\u20BF';
      default: return !(position === 'left') ? convertCurrency(value, 2) + currency.toUpperCase() :
                                                currency.toUpperCase() + convertCurrency(value, 2);
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
