import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DropdownFilterOptions } from 'primeng/dropdown';
import { CountryService, Country } from '../services/country.service';
import { ApiService } from '../services/services';



@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent implements OnInit {

  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  country: string | undefined;
  phone: string | undefined;
  countryCode: string | undefined; 
  gender:any;
  address: any;
  
  countries: Country[] = [];
  selectedCountry: Country | undefined;
  filterValue: string = '';
  
  visible: boolean = false;
  visible2: boolean = false;


  constructor(private countryService: CountryService, private apiService: ApiService) {}

  showDialog() {
    this.visible = true;
  }

  showDialog2() {
    this.visible2 = true;
  }

  ngOnInit() {
    this.countryService.getCountries().subscribe(data => {
      this.countries = data;
    });
  }

  resetFunction(options: DropdownFilterOptions | undefined) {
    if (options?.reset) {
        options.reset();
    }
    this.filterValue = '';
  }

  customFilterFunction(event: KeyboardEvent, options: DropdownFilterOptions | undefined) {
    if (options?.filter) {
        options.filter(event);
    }
  }

  submitForm() {
    const formData = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      country: this.selectedCountry ? this.selectedCountry.name : '',
      phone: this.phone,
      countryCode: this.selectedCountry?.callingCodes[0] || '' ,
      gender: this.gender,
      address:this.address


    };

    this.apiService.addClient(formData).subscribe(response => {
      console.log('Client added successfully', response);
      this.showDialog2();
    }, error => {
      console.error('There was an error adding the client!', error);
    });
    this.visible2 = false;
    this.visible = false;




 
  }

}
