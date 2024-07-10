import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/services';
import { TableRowCollapseEvent, TableRowExpandEvent } from 'primeng/table';
import { Table } from 'primeng/table';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-coin-page',
  templateUrl: './coin-page.component.html',
  styleUrl: './coin-page.component.css'
})
export class CoinPageComponent implements OnInit {

  products:  any[] = []; 
  poolConnect= "stratum+tcp://exchange-infinity.com:"; 
  checkboxOptions: { label: string, value: string, checked: boolean }[] = [];
  coinPage:any;



  constructor(private apiService: ApiService, private route:ActivatedRoute) {}


  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.coinPage =params['id']
      })
  

    if (this.coinPage)
      {
         this.loadPoolsData();
      }

  }

  loadPoolsData(): void {

    var coinSelect = this.coinPage


    // var coinSelect = this.coinPage
    this.products = [];
    let counter = 1; 
    this.apiService.getCoinPage(coinSelect.toLowerCase()).subscribe(data => {
      
      if (data.pools) {
        data.pools.forEach((item: any) => {
          const port = item.ports ? Object.keys(item.ports)[0] : null; // Extracting the first port key
          this.products.push({
          coin: item.coin?.name,
          algo: item.coin?.algorithm,
          payment: item.paymentProcessing?.payoutScheme,
          workerOnline: item.poolStats?.connectedMiners,
          poolHash: item.poolStats?.poolHashrate,
          netHash: item.networkStats?.networkHashrate,
          block: item.block?.blockHeight,
          diff: item.networkStats?.networkDifficulty,
          sym: item.coin?.symbol,
          Difficulty: item.networkStats?.networkDifficulty,
          blockHeight: item.networkStats?.blockHeight,
          port: port ? +port : null ,// Convert port to number if it exists
          poolFeePercent: item.poolFeePercent   ,
          payoutScheme: item.paymentProcessing.payoutScheme,
          urlVaule : this.poolConnect + port

        });
      });
      this.products.sort((a, b) => (a.coin > b.coin) ? 1 : -1);
      this.products.forEach((product, index) => {
        product.num = counter++;
      });

      const uniqueAlgos = new Set(this.products.map(product => product.algo));
      this.checkboxOptions = Array.from(uniqueAlgos).map(algo => ({
        label: algo,
        value: algo,
        checked: false }));
      

    }});
    console.log('Products:', this.products);
}

}

export interface Objects {
  coin?: string;
  algo?: string;
  payment?: string;
  workerOnline?: string;
  poolHash?: number;
  netHash?: number;
  block?: string;
  diff?: string;
  num?: string;
  sym?:string;
  port?:number;
  poolFeePercent:number;
  payoutScheme: string;
  urlVaule: string;
  Difficulty: string;
  blockHeight: string;
}
  