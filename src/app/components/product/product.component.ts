import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookApiServiceService } from 'src/app/service/book-api-service.service';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  constructor(
    private router: ActivatedRoute,
    private service: BookApiServiceService,
    private productService: ProductServiceService,
    private route: Router,
  ) {}

  getOneBookDetail: any;

  ngOnInit() {
    const paramsId = this.router.snapshot.paramMap.get('id');
    console.log(paramsId, 56789);

    this.OneBookDetails(paramsId);
  }

  OneBookDetails(id: any) {
    this.service.oneBookApiData(id).subscribe((result) => {
      console.log(result, 'one book result');
      this.getOneBookDetail = result;
    });
  }

  //add to cart items
  addToCart(product: any) {
    let productDetails = {
      image:product.image,
      title:product.title,
      authors : product.authors,
      language:product.language,
      price:product.price,
      isbn13:product.isbn13,
      quantity:1
    }
    this.productService.addToCart(productDetails);
    this.route.navigate(['/cart']);
  }
}
