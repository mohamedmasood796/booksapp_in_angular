import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookApiServiceService } from 'src/app/service/book-api-service.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

constructor(private router:ActivatedRoute , private service:BookApiServiceService){}

  getOneBookDetail:any

  ngOnInit(){
    const paramsId =this.router.snapshot.paramMap.get('id')
    console.log(paramsId,56789)

    this.OneBookDetails(paramsId)
  }

  OneBookDetails(id:any){
    this.service.oneBookApiData(id).subscribe((result)=>{
      console.log(result,"one book result")
      this.getOneBookDetail=result
    })
  }


}
