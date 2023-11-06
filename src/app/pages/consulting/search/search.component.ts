import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { Router } from '@angular/router';
import { ConsultingService } from '../../../services/consulting.service';
import { ISearch } from '../../../interfaces/consulting';

@Component({
  selector: 'ngx-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    columns: {
      consultingNumber: {
        title: 'Nr° Consulta',
        type: 'string',
        filter: false,
      },
      client: {
        title: 'Paciente',
        type: 'string',
        filter: false
      },
      consultingDate: {
        title: 'Fecha',
        type: 'string',
        filter: false
      },
      reason: {
        title: 'Motivo',
        type: 'string',
        filter: false
      },
      status: {
        title: 'Estado',
        type: 'html',
        filter: false,
        valuePrepareFunction: (cell, row) => {
          if (row.status === 1) {
            return '<span class="badge badge-success">PENDIENTE</span>';
          } else if(row.status === 2){
            return '<span class="badge badge-info">ATENDIDO</span>';
          } else {
            return '<span class="badge badge-warning">CANCELADO</span>'
          }
        }
      }
    },
  };
  
  isearch: ISearch = {} as ISearch;
  source: any = [];
  selectedValue: string = 'ALL';

  constructor(
    private consultingService: ConsultingService,
    private router: Router,
    private service: SmartTableData) {
  }

  ngOnInit(): void {
    this.isearch.status = this.selectedValue;
    this.consultingService.findAll(this.isearch).subscribe(consultings => {
      this.source = consultings.data
    });
  }

  onRowSelect(event: any) {
    this.router.navigate([`/pages/consulting/views/${event.data.idConsulting}`]);
  }

  onSelect(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedValue = target.value;
    this.isearch.status = target.value
  }

  search() {
    this.consultingService.findAll(this.isearch).subscribe(consultings => {
      this.source = consultings.data
    });    
  }
}
