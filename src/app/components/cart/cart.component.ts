import { Component } from '@angular/core';
import { BookApiServiceService } from 'src/app/service/book-api-service.service';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(
    private productService: ProductServiceService,
    private service: BookApiServiceService
  ) {}

  public count!: number;

  cartItems: any[] = [];
  localStorageItem: any;
  // localStorageItem!: any[];

  ngOnInit() {
    // Load cart data from localStorage when the component initializes
    this.loadCartData();
  }

  loadCartData() {
    const result = this.productService.getDataFromLs();
    console.log(result, 'localsotrage result');
    this.localStorageItem = result;
    console.log(this.localStorageItem, 4567);
  }

  decrement(index:number) {
    if (this.localStorageItem[index].quantity>0) {
      this.localStorageItem[index].quantity--
      localStorage.setItem('cart', JSON.stringify(this.localStorageItem));
    }
  }
  
  increment(index: number) {
    this.localStorageItem[index].quantity++
    localStorage.setItem('cart', JSON.stringify(this.localStorageItem));

  }

  changepositive() {
    if (this.count <= 0) {
      this.count = 1;
    }

  }

  deleteItem(index: number) {
    // Remove the item from the displayed array
    this.localStorageItem.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.localStorageItem));
  }
}
