import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nriCurrency'
})
export class NriCurrencyPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

   
  transform(value: string): string {
    // Extract the numeric value from the string
    const numericValue = parseFloat(value.replace(/[^\d.-]/g, ''));
    const exchangeRateUSDToINR=75.5
    let indianRupeesAmount = Math.floor(numericValue * exchangeRateUSDToINR)
    // Format the numeric value with the currency symbol (₹) and return
    return `₹${indianRupeesAmount}`;
  }

  

}
