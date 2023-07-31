import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  private cartItems: any[] = [];

  addToCart(product: any) {
    const storedCartItems = localStorage.getItem('cart');
    console.log(storedCartItems,"card is god",2222222222222222222222222)
    if(storedCartItems){
      // if(product.isbn13===storedCartItems?.isbn13){
      //   console.log('this product is aldrey have')
      // }

    }else{
      console.log(product,"add ot cart product",44444444444444444444)
      this.cartItems.push(product);
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }
  }


  getDataFromLs():any{
    const storedCartItems = localStorage.getItem('cart');
    console.log(storedCartItems,"stored cart items")
    if (storedCartItems) {
     this.cartItems = JSON.parse(storedCartItems);
     return this.cartItems
    }
    return
    
  }


  

}
