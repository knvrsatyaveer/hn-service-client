import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HnsearchComponent } from './component/hnsearch/hnsearch.component';
import { HnSearchResultComponent } from './component/hn-search-result/hn-search-result.component';
import {HttpModule} from "@angular/http";
import {AppRouterModule} from "./routing.module";
import {FormsModule} from "@angular/forms";
import {SearchService} from "./services/search.service";

@NgModule({
  declarations: [
    AppComponent,
    HnsearchComponent,
    HnSearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    AppRouterModule,
    FormsModule
  ],
  providers: [SearchService],
  bootstrap: [HnsearchComponent]
})
export class AppModule { }
