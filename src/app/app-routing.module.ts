import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoolsPageComponent } from './pools/pools-page/pools-page.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [

  { path: '', component: HomePageComponent },  // Default route
  { path: 'app-pools-page', component: PoolsPageComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
