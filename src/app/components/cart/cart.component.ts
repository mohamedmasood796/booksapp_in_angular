import { Component } from '@angular/core';
import { BookApiServiceService } from 'src/app/service/book-api-service.service';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor( private productService: ProductServiceService,private service: BookApiServiceService){

  }

  public count:number=1

  cartItems: any[] = [];
  localStorageItem:any


  ngOnInit() {
    // Load cart data from localStorage when the component initializes
    this.loadCartData();
  }

  loadCartData() {
   const result= this.productService.getDataFromLs()
      console.log(result,"localsotrage result")
      this.localStorageItem=result
      console.log(this.localStorageItem,4567)
  }

  decrement(){
    if(this.count!==1){
      this.count--
    }
  }

  increment(){
    this.count++
  }

  changepositive(){
    if(this.count<=0){
      this.count=1
    }
  }


  
  

}
