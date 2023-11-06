import { Component, Input, OnInit } from '@angular/core';
import { ICurrentWeekConsulting } from '../../../interfaces/dashboard';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-top-consulting',
  templateUrl: './top-consulting.component.html',
  styleUrls: ['./top-consulting.component.scss']
})
export class TopConsultingComponent implements OnInit {

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
      dni: {
        title: 'DNI',
        type: 'string',
        filter: false
      },
      client: {
        title: 'Paciente',
        type: 'string',
        filter: false
      },
      reason: {
        title: 'Motivo',
        type: 'string',
        filter: false
      },
      consultingDateAndHour: {
        title: 'Fecha',
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
          } else {
            return '<span class="badge badge-danger">ESTADO ERRONEO</span>';
          }
        }
      }
    },
  };

  @Input() source: ICurrentWeekConsulting[];

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  onRowSelect(event: any) {
    this.router.navigate([`/pages/consulting/views/${event.data.idConsulting}`]);
  }

}
