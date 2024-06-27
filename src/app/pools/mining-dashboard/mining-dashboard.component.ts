import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/services';
import { TableRowCollapseEvent, TableRowExpandEvent } from 'primeng/table';
import { Table } from 'primeng/table';
import { ChartConfiguration } from 'chart.js';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-mining-dashboard',
  templateUrl: './mining-dashboard.component.html',
  styleUrl: './mining-dashboard.component.css'
})

// api/pools/<poolId>/miners/<address>
// api/pools/<poolId>/miners/<address>/blocks
// api/pools/<poolId>/miners/<address>/payments
// api/pools/<poolId>/miners/<address>/performance
// api/pools/<poolId>/miners/<address>/settings
// api/pools/<poolId>/miners/<address>/earnings/daily
// api/pools/<poolId>/miners/<address>/balancechanges



export class MiningDashboardComponent implements OnInit {

  title = "Exchange Infinity | Mining DashBoard";
  products:  any[] = []; 
  selectedPool: any; // Track the selected pool
  poolInput : any;
  minerInput: string | undefined;
  workerAddress: string | undefined;
  searchResult: any; // To hold the search result



  coin: any[] | undefined

 

  constructor(private apiService: ApiService, private titleService: Title) {}



  ngOnInit(): void {

    this.titleService.setTitle(this.title);
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
          workerAddress : this.workerAddress,
          poolInput: item.coin?.name

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

  search() {
    if (this.poolInput && this.workerAddress) {
      const url = `https://pool4ever.com/api/pools/${this.poolInput.coin.toLowerCase()}/miners/${this.workerAddress}`;
      this.apiService.getPoolsDataInput(url).subscribe(data => {

      // Handle the data as required
      console.log('serach data', data);

      // Extract the performance object
      const performance = data.performance || {};

      // Extract workers from performance object
      const workers = performance.workers || {};

      // Convert workers object to an array for easier iteration
      const workerDetails = Object.keys(workers).map(workerName => {
        const worker = workers[workerName];
        return {
          name: workerName === "" ? 'No Name' : workerName, // Use 'No Name' if workerName is empty
          hashrate: worker.hashrate || 0,
          sharesPerSecond: worker.sharesPerSecond || 0
        };
      });



        this.searchResult = {
          pendingShares: data.pendingShares,
          pendingBalance: data.pendingBalance,
          totalPaid: data.totalPaid,
          todayPaid: data.todayPaid,
          minerEffort: data.minerEffort,
          lastPayment: data.lastPayment,
          lastPaymentLink: data.lastPaymentLink,
          performance: data.performance,
          performanceSamples: data.performanceSamples,
          workers: workerDetails , // Assigning the mapped workerDetails array
          hashrateWorker: workerDetails.length > 0 ? workerDetails[0].hashrate : 0,  // Example: Taking the hashrate of the first worker
          sharesPerSecond: workerDetails.length > 0 ? workerDetails[0].sharesPerSecond : 0  // Example: Taking sharesPerSecond of the first worker
        };
      });
    }
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
    workerAddress: string;
    poolInput: string;
    pendingShares: string
    pendingBalance: string
    totalPaid:string
    todayPaid: string
    minerEffort: string
    lastPayment: string
    lastPaymentLink: string
    performance: string
    performanceSamples: string
    // workers: string
    hashrateWorker: string
    sharesPerSecond:string
    
  }

 