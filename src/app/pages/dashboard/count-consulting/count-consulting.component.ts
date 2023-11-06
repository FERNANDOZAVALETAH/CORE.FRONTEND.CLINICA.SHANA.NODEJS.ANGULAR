import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-count-consulting',
  templateUrl: './count-consulting.component.html'
})
export class CountConsultingComponent implements OnInit {

  @Input() title: string;
  @Input() quantity: number;
  
  constructor() {

   }

  ngOnInit(): void {
  }

}
