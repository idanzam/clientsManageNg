import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PoolsTableComponent } from './pools/pools-table/pools-table.component';
import { provideHttpClient, withInterceptorsFromDi, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import {ClipboardModule} from '@angular/cdk/clipboard';


// Component:
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PoolsPageComponent } from './pools/pools-page/pools-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MiningDashboardComponent } from './pools/mining-dashboard/mining-dashboard.component';
import { ApiPageComponent } from './pools/api-page/api-page.component';
import { CoinPageComponent } from './pools/coin-page/coin-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoadMapComponent } from './road-map/road-map.component';
import { BlockFoundComponent } from './pools/block-found/block-found.component';
import { ChartComponent } from './pools/chart/chart.component';




// PrimeNG:
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { ShortNumberPipe } from './services/short-number.pipe';
import { ApiService } from './services/services';
import { DividerModule } from 'primeng/divider';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { CheckboxModule } from 'primeng/checkbox';
import { ProgressBarModule } from 'primeng/progressbar';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ChartModule } from 'primeng/chart';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DropdownModule } from 'primeng/dropdown';
import { TimelineModule } from 'primeng/timeline';
import { DayNightComponent } from './day-night/day-night.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MeterGroupModule } from 'primeng/metergroup';
import { PanelModule } from 'primeng/panel';
import { WishListComponent } from './wish-list/wish-list.component';
import { DialogModule } from 'primeng/dialog';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputMaskModule } from 'primeng/inputmask';
import { ClientTableComponent } from './wish-list/client-table/client-table.component';
import { GhostComponent } from './ghost/ghost.component';

















@NgModule({
  declarations: [
    AppComponent,
    PoolsTableComponent,
    NavbarComponent,
    FooterComponent,
    ShortNumberPipe,
    HomePageComponent,
    PoolsPageComponent,
    BlockFoundComponent,
    ChartComponent,
    MiningDashboardComponent,
    ApiPageComponent,
    CoinPageComponent,
    PageNotFoundComponent,
    RoadMapComponent,
    DayNightComponent,
    WishListComponent,
    ClientTableComponent,
    GhostComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    MenubarModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    CommonModule,
    RippleModule,
    ButtonModule,
    CardModule,
    TableModule,
    TagModule,
    RatingModule,
    DividerModule,
    IconFieldModule,
    InputIconModule,
    FormsModule,
    CheckboxModule,
    ProgressBarModule,
    ClipboardModule,
    ChartModule,
    ScrollPanelModule,
    ScrollTopModule,
    CascadeSelectModule,
    FloatLabelModule,
    DropdownModule,
    TimelineModule,
    InputSwitchModule,
    ToggleButtonModule,
    MeterGroupModule,
    PanelModule,
    DialogModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputMaskModule,
    

  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptorsFromDi(), 
    withFetch()),
    ApiService,
    provideAnimationsAsync()

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
