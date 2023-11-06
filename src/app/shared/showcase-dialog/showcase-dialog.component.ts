import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-shared-showcase-dialog',
  templateUrl: 'showcase-dialog.component.html',
  styleUrls: ['showcase-dialog.component.scss'],
})
export class ShowcaseDialogComponent {
  @Input() isValid: boolean;
  @Input() title: string;
  @Input() message: string;
  @Input() statusButton: string;
  @Input() redirectTo: string;

  constructor(
    protected ref: NbDialogRef<ShowcaseDialogComponent>,
    private router: Router,  
  ) {}

  dismiss() {
    this.ref.close();
    if(this.isValid) {
      this.router.navigate([`${this.redirectTo}`]);
    }
  }
}
