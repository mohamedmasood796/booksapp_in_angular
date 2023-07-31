import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookApiServiceService {

  constructor(private http:HttpClient) { }

  baseurl='https://api.itbook.store/1.0/';

  //get Books collection
  booksApiData():Observable<any>{
    return this.http.get(`${this.baseurl}/new`)
  }

  //get One books details
  oneBookApiData(id:any):Observable<any>{
    return this.http.get(`${this.baseurl}/books/${id}`)
  }

  


}
