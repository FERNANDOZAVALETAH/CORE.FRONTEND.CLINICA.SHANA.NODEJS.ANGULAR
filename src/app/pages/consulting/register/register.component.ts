import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NbSpinnerService } from '@nebular/theme';
import { IRegister } from '../../../interfaces/consulting';
import { ConsultingService } from '../../../services/consulting.service';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  iregister: IRegister = {} as IRegister
  showSpinner = false;

  constructor(
    private formBuilder: FormBuilder,
    private consultingService: ConsultingService,
    private spinnerService: NbSpinnerService
  ) { }

  ngOnInit(): void {
  }

  register(): void {
    this.showSpinner = true;
    console.log("SUCCESS PROCESS", JSON.stringify(this.showSpinner))
/*    this.spinnerService.registerLoader(Promise.resolve('somePromise'));
    this.consultingService.register(this.iregister).subscribe(data => {
      console.log("SUCCESS PROCESS", JSON.stringify(data))
      this.showSpinner = false;

    });
  */
   }
}
