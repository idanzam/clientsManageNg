import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/services';
import { TableRowCollapseEvent, TableRowExpandEvent } from 'primeng/table';
import { Table } from 'primeng/table';
import { ChartConfiguration } from 'chart.js';


@Component({
  selector: 'app-mining-dashboard',
  templateUrl: './mining-dashboard.component.html',
  styleUrl: './mining-dashboard.component.css'
})


export class MiningDashboardComponent implements OnInit {


  products:  any[] = []; 
  selectedPool: any; // Track the selected pool

  workerAddress: string | undefined;
  coin: any[] | undefined



  constructor(private apiService: ApiService) {}



  ngOnInit(): void {


    let counter = 1; 
    this.apiService.getPoolsData().subscribe(data => {
      if (data.pools) {
        data.pools.forEach((item: any) => {
          const port = item.ports ? Object.keys(item.ports)[0] : null; // Extracting the first port key
          this.products.push({
          coin: item.coin?.name ,
          algo: item.coin?.algorithm,
          payment: item.paymentProcessing?.payoutScheme,
          workerOnline: item.poolStats?.connectedMiners,
          poolHash: item.poolStats?.poolHashrate,
          netHash: item.networkStats?.networkHashrate,
          block: item.block?.blockHeight,
          diff: item.networkStats?.networkDifficulty,
          sym: item.coin?.symbol,
          port: port ? +port : null ,
          poolFeePercent: item.poolFeePercent   ,
          payoutScheme: item.paymentProcessing.payoutScheme,
          miner: item.miner,
          hashrate: item.hashrate,



        });
      });
      this.selectedPool = this.products

      this.products.sort((a, b) => (a.coin > b.coin) ? 1 : -1);
      this.products.forEach((product, index) => {
        product.num = counter++;
      });

      const uniqueAlgos = new Set(this.products.map(product => product.algo));
      
      

    }});
    console.log('select pool:', this.selectedPool);
  }

  groupBy(array: any[], key: string) {
    return array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
      return result;
    }, {});
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
    miner:string;
    hashrate:number;
  }

 