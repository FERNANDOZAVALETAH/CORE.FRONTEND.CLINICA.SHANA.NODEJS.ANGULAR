import { Component, OnInit } from '@angular/core';
import { ConsultingService } from '../../../services/consulting.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss']
})
export class ViewsComponent implements OnInit {
  idConsulting: string;
  consulting: any;
  value = 25;
  rowSessions = [0];

  minValue: number = 1;
  maxValue: number = 15;

  constructor(
    private activatedRoute: ActivatedRoute,
    private consultingService: ConsultingService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.idConsulting = params.get('idConsulting');
    });
    this.consultingService.findById(this.idConsulting).subscribe(data => {
      this.consulting = data
    })
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
}
