import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchUrl="http://hn.algolia.com/api/v1/search_by_date?query=";
  searchResult:any;

  constructor(private _http: Http) { }

  public search(input:string):any{
    console.log(" url is : ",this.searchUrl+input);
    return this._http.get(this.searchUrl+input)
      .pipe(
        map(response=>{
          console.log(" resp json in service : "+response.json());
          this.searchResult = response.json();
        },error=>{
          console.log("errr---"+error);
        })
      )
  }

}
