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
      if (data) {
        data.pools.forEach((item: any) => {
          this.products.push({
          coin: item.poolId,
          reward: item.reward,
          status: item.status,
          confirm: item.confirmationProgress,
          poolHash: item.poolId,
          netHash: item.poolId,
          block: item.poolId,
          diff: item.poolId,
          sym: item.poolId,
        });
      });
      this.products.sort((a, b) => (a.coin > b.coin) ? 1 : -1);

      this.products.forEach((product, index) => {
        product.num = counter++;
      });

    }});
    console.log('Products:', this.products);

  }
}


export interface Objects {
  coin?: string;
  reward?: string;
  status?: string;
  confirm?: string;
  poolHash?: number;
  netHash?: number;
  block?: string;
  diff?: string;
  num?: string;
  sym?:string;
}
 