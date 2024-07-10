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

  clients:  any[] = []; 
  @ViewChild('dt2') dt2!: Table;
  expandedRows: { [key: string]: boolean } = {}; 
  searchValue: string | undefined;
  filteredProducts: any[] = [];
  checkboxOptions: { label: string, value: string, checked: boolean }[] = [];
  messageService: any;
  selectedClient: any = {};
  editDialogVisible: boolean | undefined;
  clonedProducts: { [s: string]: Objects } = {};
  visible2: boolean = false;
  visible: boolean = false;
  firstname: any;
  lastname: any;
  email: any;
  address: any;
  gender:any;
  filterValue: string = '';


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.loadClientsData()

  }

  loadClientsData(): void {

    this.clients = [];
    let counter = 1;
    this.apiService.getClientsData().subscribe(
      data => {
        this.clients = data.map((item: any, index: number) => ({
          id: item.id,
          firstname: item.firstname,
          lastname: item.lastname,
          phone: item.phone,
          address: item.address,
          gender: item.gender,
          email: item.email,
        }));
        console.log('Clients:', this.clients);
      },
      error => {
        console.error('There was an error loading the clients!', error);
      }
    );
        console.log('Clients:', this.clients);

  }

  
  deleteClient(id: number): void {
    this.apiService.deleteClient(id).subscribe(
      () => {
        console.log(`Client with id ${id} deleted successfully`);
        this.clients = this.clients.filter(client => client.id !== id);
      },
      error => {
        console.error('There was an error deleting the client!', error);
      }
    );
  }

  editClient(client: any): void {
    this.selectedClient = { ...client }; 
    this.visible = true;

  }


  applyChanges(): void {
    this.apiService.updateClient(this.selectedClient.id, this.selectedClient).subscribe(
      () => {
        console.log(`Client with id ${this.selectedClient.id} updated successfully`);
        this.visible = false; 
        this.refreshTable(); 
      },
      error => {
        console.error('There was an error updating the client!', error);
      }
    );
  }

  refreshTable(): void {
    this.loadClientsData();
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

  onRowExpand(event: TableRowExpandEvent) {
    this.expandedRows[event.data.id] = true;
  }

  onRowCollapse(event: TableRowCollapseEvent) {
    delete this.expandedRows[event.data.id];
  }

  showDialog2() {
    this.visible2 = true;
  }

  
}


export interface Objects {
  
  firstname: string;
  lastname:string;
  phone:number;
  address:string;
  gender:string;
  email:string;

  }