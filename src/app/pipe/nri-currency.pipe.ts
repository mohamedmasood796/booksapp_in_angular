import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nriCurrency'
})
export class NriCurrencyPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: string): string {
    // Remove the currency symbol ($) and any thousand separators (,) from the string
    const numericValue = value.replace(/[$,]/g, '');

    // Convert the numeric value back to a number
    const numericAmount = parseFloat(numericValue);

    // Format the numeric value using the Indian numbering system (en-IN locale)
    const nriFormatted = new Intl.NumberFormat('en-IN').format(numericAmount);

    return nriFormatted;
  }


}
