import { Books } from 'src/app/Interface/interface';
import { ToastrServiceService } from './toastr.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  constructor(protected Toastrservice:ToastrServiceService) {}

  private cartItems: Books[] = [];

  addToCart(product: Books) {
    const storedCartItems = localStorage.getItem('cart');

    const cartItems: Books[] = storedCartItems ? JSON.parse(storedCartItems) : [];

    let changed:boolean = false;

    cartItems.map((item) => {
      if (item.isbn13 === product.isbn13) {
        item.quantity += 1;
        changed = true;
      }
    });

    if (changed) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
      this.Toastrservice.showSuccess(' This product already exist ! quantity increased.');
    } else {
      this.cartItems.push(product);
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
      this.Toastrservice.showSuccess(' Successfully added to cart.');
    }
  }

  getDataFromLs() {
    const storedCartItems = localStorage.getItem('cart');
    if (storedCartItems) {
      this.cartItems = JSON.parse(storedCartItems);
      console.log(this.cartItems,"cart itemsssssssssssssss999999999999999999999999999999999999999999999999999999999999")
      return this.cartItems;
    }
    return;
  }

  decrement(localStorageItem: Books) {
      localStorage.setItem('cart', JSON.stringify(localStorageItem));
      this.Toastrservice.showSuccess(' Quantity Decremented.');
    
  }

  increment(localStorageItem:Books){
    localStorage.setItem('cart', JSON.stringify(localStorageItem));
    this.Toastrservice.showSuccess(' Quantity Incremented.');
  }

  deleteItem(index:number,localStorageItem:Books[]){
    localStorageItem.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(localStorageItem));
    this.Toastrservice.showError('product is deleted')
  }


}
