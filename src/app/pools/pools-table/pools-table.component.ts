import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/services';
import { TableRowCollapseEvent, TableRowExpandEvent } from 'primeng/table';
import { Table } from 'primeng/table';


@Component({
  selector: 'app-pools-table',
  templateUrl: './pools-table.component.html',
  styleUrl: './pools-table.component.css'

})

export class PoolsTableComponent implements OnInit {

  @ViewChild('dt2') dt2!: Table;
  products:  any[] = []; 
  expandedRows: { [key: string]: boolean } = {}; // Explicitly typing expandedRows
  searchValue: string | undefined;
  filteredProducts: any[] = [];
  checkboxOptions: { label: string, value: string, checked: boolean }[] = [];



  constructor(private apiService: ApiService) {}

  ngOnInit() {

  //   this.apiService.getPoolsData().subscribe((data) => {
  //     if (data && data.pools) {
  //       this.products = data.pools;
  //     } else {
  //       console.error('Data is not an array:', data);
  //     }
  // });

    let counter = 1; 
    this.apiService.getPoolsData().subscribe(data => {
      if (data.pools) {
        data.pools.forEach((item: any) => {
          this.products.push({
          coin: item.coin?.name,
          algo: item.coin?.algorithm,
          payment: item.paymentProcessing?.payoutScheme,
          workerOnline: item.poolStats?.connectedMiners,
          poolHash: item.poolStats?.poolHashrate,
          netHash: item.networkStats?.networkHashrate,
          block: item.block?.blockHeight,
          diff: item.networkStats?.networkDifficulty,
          sym: item.coin?.symbol
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
}