import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/services';
import { TableRowCollapseEvent, TableRowExpandEvent } from 'primeng/table';



@Component({
  selector: 'app-block-found',
  templateUrl: './block-found.component.html',
  styleUrl: './block-found.component.css'
})
export class BlockFoundComponent implements OnInit {

  products:  any[] = []; 
 

  constructor(private apiService: ApiService) {}
 
  ngOnInit() {

    let counter = 1; 
    this.apiService.getblockssData().subscribe(data => {
      // console.log('API Response:', data); // Log the response to debug

      if (data) {
        data.forEach((item: any) => {
          this.products.push({
          coin: item.poolId,
          reward: item.reward,
          status: item.status,
          confirm: item.confirmationProgress *100 ,
          info: item.infoLink,
          miner: item.miner,
          time: item.created,
        });
      });
      // this.products.sort((a, b) => (a.coin > b.coin) ? 1 : -1);

      this.products.forEach((product, index) => {
        product.num = counter++;
      });

    }});
    // console.log('Products:', this.products);

  }
}


export interface Objects {
  coin?: string;
  reward?: string;
  status?: string;
  confirm?: number;
  info?: string;
  miner?: string;
  time?: string;
  num?: string;
}
