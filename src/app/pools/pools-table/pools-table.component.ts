import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/services';
import { TableRowCollapseEvent, TableRowExpandEvent } from 'primeng/table';
import { Table } from 'primeng/table';
import { ChartConfiguration } from 'chart.js';

 
@Component({
  selector: 'app-pools-table',
  templateUrl: './pools-table.component.html',
  styleUrl: './pools-table.component.css'

})

export class PoolsTableComponent implements OnInit {

  public barChartConfig: ChartConfiguration;


  @ViewChild('dt2') dt2!: Table;
  products:  any[] = []; 
  expandedRows: { [key: string]: boolean } = {}; 
  searchValue: string | undefined;
  filteredProducts: any[] = [];
  checkboxOptions: { label: string, value: string, checked: boolean }[] = [];
  poolConnect= "stratum+tcp://exchange-infinity.com:"; 
  messageService: any;
  // urlVaule: any;

  constructor(private apiService: ApiService) {

    this.barChartConfig = {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Series A',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          },
          {
            label: 'Series B',
            data: [28, 48, 40, 19, 86, 27, 90],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            beginAtZero: true
          },
          y: {
            beginAtZero: true
          }
        }
      }
    };
  }

  ngOnInit(): void {

    this.loadPoolsData();

  }

  loadPoolsData(): void {
    this.products = [];
    let counter = 1; 
    this.apiService.getPoolsData().subscribe(data => {
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
    // console.log('Products:', this.products);
}

refreshTable(): void {
  this.loadPoolsData();
  this.dt2.reset();
}

filterGlobal(event: any) {
  const inputElement = event.target as HTMLInputElement;
  this.dt2.filterGlobal(inputElement.value, 'contains');
}

clear(table: Table) {
  table.clear();
  this.searchValue = ''
  this.checkboxOptions.forEach(option => option.checked = false);
}

filterTable() {
  this.dt2.filter(this.checkboxOptions.filter(option => option.checked).map(option => option.value), 'algo', 'in');
}

onRowExpand(event: TableRowExpandEvent) {
  this.expandedRows[event.data.id] = true;
}

onRowCollapse(event: TableRowCollapseEvent) {
  delete this.expandedRows[event.data.id];
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