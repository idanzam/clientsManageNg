import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PoolsTableComponent } from './pools/pools-table/pools-table.component';
import { provideHttpClient, withInterceptorsFromDi, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

// Component:
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PoolsPageComponent } from './pools/pools-page/pools-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

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
import { BlockFoundComponent } from './pools/block-found/block-found.component';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { CheckboxModule } from 'primeng/checkbox';




@NgModule({
  declarations: [
    AppComponent,
    PoolsTableComponent,
    NavbarComponent,
    FooterComponent,
    ShortNumberPipe,
    HomePageComponent,
    PoolsPageComponent,
    BlockFoundComponent

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
    CheckboxModule

  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptorsFromDi(), 
    withFetch()),
    ApiService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
