import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookApiServiceService } from 'src/app/service/book-api-service.service';
import { Books } from 'src/app/Interface/interface';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor(private service:BookApiServiceService,private router:Router){}

  ngOnInit():void{
    this.getBooksData()

  }

  booksResult:Books[]=[]

  //get book data
  getBooksData(){
    this.service.booksApiData().subscribe((result)=>{
      console.log(result,"result")
      this.booksResult=result.books
    })
  }




}
