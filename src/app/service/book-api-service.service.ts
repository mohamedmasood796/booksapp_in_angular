import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from '../Interface/interface';

@Injectable({
  providedIn: 'root'
})
export class BookApiServiceService {

  constructor(private http:HttpClient) { }

  baseurl='https://api.itbook.store/1.0/';

  //get Books collection
  booksApiData():Observable<{ total: string, books:Books[], error: string }>{
    return this.http.get<{ total: string, books:Books[], error: string }>(`${this.baseurl}/new`)
  }

  //get One books details
  oneBookApiData(id:string):Observable<{ total: string, books:Books[], error: string }>{
    return this.http.get<{ total: string, books:Books[], error: string }>(`${this.baseurl}/books/${id}`)
  }

  


}
