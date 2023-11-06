import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { IRegister } from '../../../interfaces/consulting';
import { ConsultingService } from '../../../services/consulting.service';
import { ShowcaseDialogComponent } from '../../../shared/showcase-dialog/showcase-dialog.component';
import { HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  iregister: IRegister = {} as IRegister
  showSpinner = false;
  showCaseDialogComponent : ShowcaseDialogComponent;
  constructor(
    private consultingService: ConsultingService,
    private dialogService: NbDialogService
  ) {

   }

  ngOnInit(): void {
    this.showSpinner = false;
  }

  register(): void {
    this.showSpinner = true;
    this.iregister.consultingDate = `${this.iregister.consultingDate} ${this.iregister.consultingHour}`;
    this.consultingService.register(this.iregister)
      .subscribe({
        next: (consulting) => {
          this.openDialog(consulting.message, 'La operación se ejecuto sin problemas', true);
          this.showSpinner = false;
          console.log("SERVICE SUCCESS:", consulting.message);
        },
        error: (e) => {
          const error = this.errorHandler(e);
          this.openDialog(error.title, error.message, false);
          this.showSpinner = false;
        },
        complete: () => {
          console.log("PROCESS COMPLETE")
        },
    });
    
  }

  openDialog(title: string, message: string, isValid: boolean) {
    this.dialogService.open(ShowcaseDialogComponent, {
      context: {
        isValid,
        title,
        message,
        redirectTo: '/pages/consulting/search'
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
