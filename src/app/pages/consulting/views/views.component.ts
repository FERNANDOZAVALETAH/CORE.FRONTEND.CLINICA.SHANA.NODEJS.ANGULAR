import { Component, OnInit } from '@angular/core';
import { ConsultingService } from '../../../services/consulting.service';
import { ActivatedRoute } from '@angular/router';
import { format, parse } from 'date-fns';
import { HttpStatusCode } from '@angular/common/http';
import { NbDialogService } from '@nebular/theme';
import { ShowcaseDialogComponent } from '../../../shared/showcase-dialog/showcase-dialog.component';

@Component({
  selector: 'ngx-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss']
})
export class ViewsComponent implements OnInit {
  idConsulting: string;
  consulting: any;
  formatDate: Date;
  value = 25;
  rowSessions = [0];

  minValue: number = 1;
  maxValue: number = 15;

  showSpinner = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private consultingService: ConsultingService,
    private dialogService: NbDialogService
  ) { }

  ngOnInit(): void {
    this.showSpinner = true;
    this.activatedRoute.paramMap.subscribe(params => {
      this.idConsulting = params.get('idConsulting');
    });

    this.consultingService.findById(this.idConsulting)
    .subscribe({
      next: (consulting) => {
        this.consulting = consulting.data;
        this.formatDate = parse(this.consulting.formatDate, 'dd/MM/yyyy', new Date());
        this.showSpinner = false;
        console.log("SERVICE SUCCESS:", consulting.message);
      },
      error: (e) => {
        const error = this.errorHandler(e);
        this.openDialog(error.title, error.message);
        this.showSpinner = false;
      },
      complete: () => console.log("PROCESS COMPLETE"),
  });
  }

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    this.generateRowRegisterSessions(parseInt(value));
  }

  get status() {
    if (this.value <= 25) {
      return 'danger';
    } else if (this.value <= 50) {
      return 'warning';
    } else if (this.value <= 75) {
      return 'info';
    } else {
      return 'success';
    }
  }

  private generateRowRegisterSessions(quantityRow: number){
    if(this.maxValue >= quantityRow) {
      this.rowSessions = []
      for (let index = 0; index < quantityRow; index++) {
        this.rowSessions.push(index)
      }
    }
  }

  openDialog(title: string, message: string) {
    this.dialogService.open(ShowcaseDialogComponent, {
      context: {
        title,
        message
      },
    });
  }


  errorHandler(e) {
    if(e.error.statusCode == HttpStatusCode.BadRequest) {
      return {
        title: 'BR: SOLICITUD INCORRECTA',
        message: 'Recuerda que debes enviar todos los parametros requeridos para esta solicitud, por favor intentalo nuevamente, gracias'
      }
    }
    return {
      title: 'IE: ERROR INTERNO',
      message: 'Estamos presentado algunos problemas, por favor intentalo nuevamente o mas tarde, gracias.'
    }
  }

}
