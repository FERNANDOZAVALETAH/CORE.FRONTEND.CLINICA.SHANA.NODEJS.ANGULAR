import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';

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
      id: {
        title: 'Nr° Consulta',
        type: 'string',
        filter: false,
      },
      firstName: {
        title: 'DNI',
        type: 'string',
        filter: false
      },
      lastName: {
        title: 'Paciente',
        type: 'string',
        filter: false
      },
      username: {
        title: 'Motivo',
        type: 'string',
        filter: false
      },
      email: {
        title: 'Estado',
        type: 'string',
        filter: false
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
    const data = this.service.getData();
    this.source.load(data);
  }

  ngOnInit(): void {
  }

}
