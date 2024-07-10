import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoolsPageComponent } from './pools/pools-page/pools-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MiningDashboardComponent } from './pools/mining-dashboard/mining-dashboard.component';
import { ApiPageComponent } from './pools/api-page/api-page.component';
import { CoinPageComponent } from './pools/coin-page/coin-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { GhostComponent } from './ghost/ghost.component';


const routes: Routes = [

  { path: '', component: HomePageComponent },  // Default route
  { path: 'app-ghost', component: GhostComponent },
  { path: 'app-pools-page', component: PoolsPageComponent },
  { path: 'app-mining-dashboard', component: MiningDashboardComponent },
  { path: 'app-api-page', component: ApiPageComponent },
  { path: 'app-coin-page/:id', component: CoinPageComponent },
  { path: 'app-wish-list', component: WishListComponent },
  { path: '**', component: PageNotFoundComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
