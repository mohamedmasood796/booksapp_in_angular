import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nriCurrency'
})
export class NriCurrencyPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

   
  
    transform(value: string,count:number): string {
      if (value) {
        console.log(value,"its is value")
        console.log(count,"its is count")
        let amountWithoutDollar = value.replace(/\$/g, '');
        let amount = parseFloat(amountWithoutDollar);
        const exchangeRateUSDToINR = 74.5;
        let indianRupeesAmount = Math.floor(amount * exchangeRateUSDToINR)
        if(count){
         indianRupeesAmount= (indianRupeesAmount*count)
        }
        console.log(indianRupeesAmount,"indian Rupees 44444444444444444444444444444444444444")
        return "₹"+indianRupeesAmount;
      }
      return value; 
    }
  

  

}
