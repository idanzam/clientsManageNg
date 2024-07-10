import { Component,OnInit  } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {


  items: MenuItem[] | undefined;


  constructor(private router: Router) {}

 

  ngOnInit() {
      this.items = [
            {
                label: 'home',
                icon: 'pi pi-home',
                routerLink: '/',
            },
      
          {
              label: 'Clients',
              icon: 'pi pi-table',
              routerLink: '/app-pools-page',
              items: [
                  {
                      label: 'Clients Table Review',
                      icon: 'pi pi-bolt',
                      routerLink: '/app-pools-page',

                  },
                  {
                      label: 'API REST',
                      icon: 'pi pi-pencil',
                      routerLink: '/app-api-page',
                  },
              ]
          },
       
      ];
  }

}
