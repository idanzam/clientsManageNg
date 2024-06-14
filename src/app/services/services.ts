        import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
        import { isPlatformBrowser } from '@angular/common';
        import { HttpClient } from '@angular/common/http';
        import { Observable } from 'rxjs';
        

        @Injectable({
        providedIn: 'root'
        })

        export class ApiService {

        private poolApi = 'https://exchange-infinity.com/api/pools/';
        private blockApi = 'https://exchange-infinity.com/api/blocks/';
        private readonly themeLinkElementId = 'app-theme';


        constructor(private http: HttpClient,
                            @Inject(PLATFORM_ID) private platformId: Object) {

            if (isPlatformBrowser(this.platformId)) {
                this.initTheme();
                }
        }

        private initTheme() {
            const theme = this.getThemeFromLocalStorage() || 'vela-blue';
            this.setTheme(theme);
        }

        setTheme(theme: string) {
            const themeLinkElement = document.getElementById(this.themeLinkElementId);
            if (themeLinkElement) {
              themeLinkElement.setAttribute('href', `/public/themes/${theme}/theme.css`);
            } else {
              this.createThemeLinkElement(theme);
            }
            this.setThemeToLocalStorage(theme);
        }
        
        private createThemeLinkElement(theme: string) {
            const linkElement = document.createElement('link');
            linkElement.id = this.themeLinkElementId;
            linkElement.rel = 'stylesheet';
            linkElement.href = `/public/themes/${theme}/theme.css`;
            document.head.appendChild(linkElement);
        }
        
        private getThemeFromLocalStorage(): string | null {
            if (isPlatformBrowser(this.platformId)) {
              return localStorage.getItem('theme');
            }
            return null;
        }
        
        private setThemeToLocalStorage(theme: string) {
            if (isPlatformBrowser(this.platformId)) {
              localStorage.setItem('theme', theme);
            }
        }
          
        getPoolsData(): Observable<any> {
            return this.http.get<any>(this.poolApi);
        }

        getblockssData(): Observable<any> {
          return this.http.get<any>(this.blockApi);
        }
        
      }