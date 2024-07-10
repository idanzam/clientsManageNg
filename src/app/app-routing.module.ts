import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoolsPageComponent } from './pools/pools-page/pools-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ApiPageComponent } from './pools/api-page/api-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WishListComponent } from './wish-list/wish-list.component';


const routes: Routes = [

  { path: '', component: HomePageComponent },  
  { path: 'app-pools-page', component: PoolsPageComponent },
  { path: 'app-api-page', component: ApiPageComponent },
  { path: 'app-wish-list', component: WishListComponent },
  { path: '**', component: PageNotFoundComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
