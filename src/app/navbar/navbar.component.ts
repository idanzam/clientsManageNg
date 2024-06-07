import { Component,OnInit  } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ApiService } from '../services/services';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

    // items: MenuItem[] = [];

  items: MenuItem[] | undefined;


  constructor(private themeService: ApiService) {}

  switchTheme(theme: string) {
    this.themeService.setTheme(theme);
  }

  ngOnInit() {
      this.items = [
          {
              label: 'Home',
              icon: 'pi pi-home',
              routerLink: '/'          
          },
      
          {
              label: 'Trade',
              icon: 'pi pi-chart-bar',
              badge: 'Comming Soon'


            //   items: [
            //     {
            //         label: 'Spot',
            //         icon: 'pi pi-bolt',
            //         shortcut: '⌘+S'
            //     },
            //     {
            //         label: 'Swap',
            //         icon: 'pi pi-server',
            //         shortcut: '⌘+B'
            //     },
            //     {
            //         label: 'Fees & Limits',
            //         icon: 'pi pi-pencil',
            //         shortcut: '⌘+U'
            //     },
            //     {
            //         separator: true
            //     },
            //     {
            //         label: 'Templates',
            //         icon: 'pi pi-palette',
            //         items: [
            //             {
            //                 label: 'Apollo',
            //                 icon: 'pi pi-palette',
            //                 badge: '2'
            //             },
            //             {
            //                 label: 'Ultima',
            //                 icon: 'pi pi-palette',
            //                 badge: '3'
            //             }
            //         ]
            //     }
            // ]
          },
          {
              label: 'Mining Pools',
              icon: 'pi pi-table',

              items: [
                  {
                      label: 'Pools Review',
                      icon: 'pi pi-bolt',
                    //   shortcut: '⌘+S',
                      routerLink: '/app-pools-page',

                  },
                  {
                      label: 'Worker Dashboard',
                      icon: 'pi pi-server',
                    //   shortcut: '⌘+B'
                  },
                  {
                      label: 'UI Kit',
                      icon: 'pi pi-pencil',
                    //   shortcut: '⌘+U'
                  },
                //   {
                //       separator: true
                //   },
                //   {
                //       label: 'Templates',
                //       icon: 'pi pi-palette',
                //       items: [
                //           {
                //               label: 'Apollo',
                //               icon: 'pi pi-palette',
                //               badge: '2'
                //           },
                //           {
                //               label: 'Ultima',
                //               icon: 'pi pi-palette',
                //               badge: '3'
                //           }
                //       ]
                //   }
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
