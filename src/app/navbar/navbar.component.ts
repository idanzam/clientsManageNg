import { Component,OnInit  } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

    // items: MenuItem[] = [];

  items: MenuItem[] | undefined;


  constructor(private router: Router) {}

 

  ngOnInit() {
      this.items = [
          {
              label: 'Buy Cypto',
              icon: 'pi pi-shop',
              router: '/'          
          },
          {
              label: 'Trade',
              icon: 'pi pi-chart-bar',
              badge: 'Comming Soon!'
          },
          {
              label: 'Mining Pools',
              icon: 'pi pi-table',
              routerLink: '/app-pools-page',
              items: [
                  {
                      label: 'Pools Review',
                      icon: 'pi pi-bolt',
                      routerLink: '/app-pools-page',

                  },
                  {
                      label: 'Worker Dashboard',
                      icon: 'pi pi-server',
                      routerLink: '/app-mining-dashboard',
                  },
                  {
                      label: 'API REST',
                      icon: 'pi pi-pencil',
                      routerLink: '/app-api-page',
                  },
              ]
          },
          {
              label: 'Help',
              icon: 'pi pi-question-circle',
            //   badge: 'Comming Soon'
          }
      ];
  }

}
