import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pools-page',
  templateUrl: './pools-page.component.html',
  styleUrl: './pools-page.component.css'
})
export class PoolsPageComponent  implements OnInit {

  title = "Clients Infinity | Clients Table Info";

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }


}