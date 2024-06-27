import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface Country {
  name: string;
  alpha2Code: string;
  callingCodes: string[];
  flag: string;
  code: string; // This will be the alpha2Code, used in the dropdown
  // countryCode:string
  }

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private countriesUrl = 'https://restcountries.com/v2/all'; // URL to REST API

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<any[]>(this.countriesUrl).pipe(
      map(data => data.map(country => ({
        name: country.name,
        alpha2Code: country.alpha2Code,
        callingCodes: country.callingCodes,
        flag: country.flag,
        code: country.alpha2Code,
        // countryCode: country.country.code// Use alpha2Code as code
      })))
    );
  }
}
