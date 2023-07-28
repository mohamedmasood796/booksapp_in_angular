import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  private cartItems: any[] = [];

  addToCart(product: any) {
    this.cartItems.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }
}
