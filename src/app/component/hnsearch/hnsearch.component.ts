import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../services/search.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-hnsearch',
  templateUrl: './hnsearch.component.html',
  styleUrls: ['./hnsearch.component.css']
})
export class HnsearchComponent implements OnInit {

  constructor(private _service: SearchService, private router:Router) { }

  ngOnInit() {

  }

  public onSubmit(data):any{
    console.log("data  input : "+data.inputData);
     this._service.search(data.inputData)
      .subscribe(
        response=>{
          console.log(" routing to search result"+response);
          this.router.navigate(['/ngSearchResult']);
        },error=>{
          console.log(" error redirecting : ");
        }
      )
  }



}
