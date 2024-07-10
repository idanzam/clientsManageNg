        import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
        import { isPlatformBrowser } from '@angular/common';
        import { HttpClient, HttpErrorResponse } from '@angular/common/http';
        import { Observable, catchError, throwError } from 'rxjs';
        

        @Injectable({
        providedIn: 'root'
        })

        export class ApiService {

        private clientsApi ='http://213.137.74.31:3311/api/clients';


        private readonly themeLinkElementId = 'app-theme';
        constructor(private http: HttpClient,
        @Inject(PLATFORM_ID) private platformId: Object) {}
        
        getClientsData(): Observable<any> {
           return this.http.get<any>(this.clientsApi).pipe(
            catchError(this.handleError)
           );
        }
        addClient(clientData: any): Observable<any> {
          return this.http.post<any>(this.clientsApi, clientData).pipe(
            catchError(this.handleError)
          );
        }
        deleteClient(id: number): Observable<any> {
          return this.http.delete<any>(`${this.clientsApi}/${id}`).pipe(
            catchError(this.handleError)
          );
        }
        updateClient(id: number, clientData: any): Observable<any> {
          return this.http.put<any>(`${this.clientsApi}/${id}`, clientData).pipe(
            catchError(this.handleError)
          );
        }

        private handleError(error: HttpErrorResponse): Observable<never> {
          if (error.error instanceof ErrorEvent) {
            // Client-side/network error
            console.error('An error occurred:', error.error.message);
          } else {
            // Backend error
            console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
          }
          return throwError('Something bad happened; please try again later.');
        }   
        
      }