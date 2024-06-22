import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/services';
import { TableRowCollapseEvent, TableRowExpandEvent } from 'primeng/table';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-block-found',
  templateUrl: './block-found.component.html',
  styleUrl: './block-found.component.css'
})
export class BlockFoundComponent implements OnInit {

  products:  any[] = []; 
  pEffort:  any[] = []; 

  
 

  constructor(private apiService: ApiService,private sanitizer: DomSanitizer) {}
 
  ngOnInit() {

    let counter = 1; 
    this.apiService.getblockssData().subscribe(data => {
      // console.log('API Response:', data); // Log the response to debug

      if (data) {
        data.forEach((item: any) => {
          this.products.push({
          coin: this.capitalizeFirstLetter(item.poolId),
          reward: item.reward,
          status: item.status,
          confirm: (item.confirmationProgress * 100).toFixed(2) + '%',
          info: item.infoLink,
          miner: item.miner,
          time: item.created,
          transactionConfirmationData: item.transactionConfirmationData,
          infoLink: item.infoLink,
          effort: item.effort,
          pConfirm: (item.confirmationProgress * 100).toFixed(2)
        });
      
      });
      

      this.products.forEach((product, index) => {
        product.num = counter++;
        
      });

    }});
    // console.log('Products:', this.products);

  }

  capitalizeFirstLetter(value: string): string {
    if (!value) {
      return value;
    }
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }

  openUrl(url: string): void {
    window.open(url, '_blank');
  }

}


export interface Objects {
  coin?: string;
  reward?: string;
  status?: string;
  confirm?: string;
  info?: string;
  miner?: string;
  time?: string;
  num?: string;
  transactionConfirmationData?: string;
  infoLink: string;
  effort: number;
  value:string;
  pConfirm:number;
}
