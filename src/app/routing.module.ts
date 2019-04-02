import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {HnsearchComponent} from "./component/hnsearch/hnsearch.component";
import {HnSearchResultComponent} from "./component/hn-search-result/hn-search-result.component";
const routes:Routes =[
  {
    path:'',redirectTo:'',
    pathMatch:'full'
  },
  {
    path:'hnsearch',
    component:HnsearchComponent
  },
  {
    path:'ngSearchResult',
    component:HnSearchResultComponent
  }
];


@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRouterModule{


}
