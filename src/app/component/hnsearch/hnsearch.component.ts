import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../services/search.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-hnsearch',
  templateUrl: './hnsearch.component.html',
  styleUrls: ['./hnsearch.component.css']
})
export class HnsearchComponent implements OnInit {

  hnSearchResult:any = [];


  constructor(private _service: SearchService, private router:Router) { }

  ngOnInit() {

  }

  public onSubmit(data):any{
    console.log("data  input : "+data.inputData);
     this._service.search(data.inputData)
      .subscribe(
        response=>{
          this.hnSearchResult= this._service.searchResult.hits;
        },error=>{
          console.log(" error redirecting : ");
        }
      )
  }



}
