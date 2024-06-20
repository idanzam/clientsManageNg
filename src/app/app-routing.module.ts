import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoolsPageComponent } from './pools/pools-page/pools-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MiningDashboardComponent } from './pools/mining-dashboard/mining-dashboard.component';
import { ApiPageComponent } from './pools/api-page/api-page.component';
import { CoinPageComponent } from './pools/coin-page/coin-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [

  { path: '', component: HomePageComponent },  // Default route
  { path: 'app-pools-page', component: PoolsPageComponent },
  { path: 'app-mining-dashboard', component: MiningDashboardComponent },
  { path: 'app-api-page', component: ApiPageComponent },
  { path: 'app-coin-page', component: CoinPageComponent },
  { path: '**', component: PageNotFoundComponent }





  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
