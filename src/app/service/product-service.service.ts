import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  constructor() {}

  private cartItems: any[] = [];

  addToCart(product: any) {
    const storedCartItems = localStorage.getItem('cart');
   
    const cartItems: any[] = storedCartItems ? JSON.parse(storedCartItems) : [];

    let changed = false

    cartItems.map((item) => {
      if (item.isbn13 === product.isbn13) {
        item.quantity += 1;
        changed = true
      }
    });
    
    if (changed) {
      localStorage.setItem('cart',JSON.stringify(cartItems))
    } else {
      this.cartItems.push(product);
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }
   
  }

  getDataFromLs(): any {
    const storedCartItems = localStorage.getItem('cart');
    console.log(storedCartItems, 'stored cart items');
    if (storedCartItems) {
      this.cartItems = JSON.parse(storedCartItems);
      return this.cartItems;
    }
    return;
  }
}
