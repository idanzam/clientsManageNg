        import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
        import { isPlatformBrowser } from '@angular/common';
        import { HttpClient } from '@angular/common/http';
        import { Observable } from 'rxjs';
        

        @Injectable({
        providedIn: 'root'
        })

        export class ApiService {

        private apiUrl = 'https://exchange-infinity.com/wish-api/submit'; 
        private submissionsUrl = 'https://exchange-infinity.com/wish-api/submissions';
        private poolApi = 'https://exchange-infinity.com/api/pools/';
        private blockApi = 'https://exchange-infinity.com/api/blocks/';
        private readonly themeLinkElementId = 'app-theme';


        constructor(private http: HttpClient,
                            @Inject(PLATFORM_ID) private platformId: Object) {}
        
        getAllSubmissions(): Observable<any[]> {
            return this.http.get<any[]>(this.submissionsUrl);
        }

        submitForm(formData: any): Observable<any> {
            return this.http.post<any>(this.apiUrl, formData);
        }
          
        getPoolsData(): Observable<any> {
            return this.http.get<any>(this.poolApi);
        }

        getblockssData(): Observable<any> {
          return this.http.get<any>(this.blockApi);
        }

        getPoolsDataInput(url: string = 'https://exchange-infinity.com/api/pools/'): Observable<any> {
        return this.http.get<any>(url);
        }

        getCoinPage(coinSelect: any): Observable<any> {
          return this.http.get<any>(this.poolApi);
      }
        
      }