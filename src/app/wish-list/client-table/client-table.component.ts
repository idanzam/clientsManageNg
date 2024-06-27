import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/services'; // Adjust path as per your project structure

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrl: './client-table.component.css'
})
export class ClientTableComponent  implements OnInit {


  submissions: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchSubmissions();
  }

  fetchSubmissions() {
    this.apiService.getAllSubmissions().subscribe(
      (data) => {
        this.submissions = data;
      },
      (error) => {
        console.error('Error fetching submissions:', error);
      }
    );
  }

}
