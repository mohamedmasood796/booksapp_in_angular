import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nriCurrency'
})
export class NriCurrencyPipe implements PipeTransform {

  
    transform(value: string): string {
    // Extract the numeric value from the string
    const numericValue = parseFloat(value.replace(/[^\d.-]/g, ''));

    // Format the numeric value with the currency symbol (₹) and return
    return `₹${numericValue}`;
  }


}
