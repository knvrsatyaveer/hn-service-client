import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../services/search.service";
import {PaginatorModule} from 'primeng/paginator';
@Component({
  selector: 'app-hn-search-result',
  templateUrl: './hn-search-result.component.html',
  styleUrls: ['./hn-search-result.component.css']
})
export class HnSearchResultComponent implements OnInit {

  hnSearchResult:any;
  searchResultArray:any;

  constructor(private service:SearchService ) { }

  ngOnInit() {
    console.log(" NG ON INIT search result : "+this.service.searchResult);
    this.hnSearchResult = this.service.searchResult;
    this.searchResultArray = this.service.searchResult.hits;

  }

}
