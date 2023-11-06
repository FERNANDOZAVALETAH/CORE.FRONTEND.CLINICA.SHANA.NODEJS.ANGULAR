import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMenuService, NbSidebarService } from '@nebular/theme';

import { LayoutService } from '../../../@core/utils';
import { Subject } from 'rxjs';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = true;
  user: any;


  userMenu = [ { title: 'Profile' }, { title: 'Log out' } ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private layoutService: LayoutService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.userService.findById("652b4fcbb8385377ea1a9cc9").subscribe({
      next: (response) => {
        this.user = response.data;
        console.log("SERVICE SUCCESS:", response.message);
      },
      error: (e) => {
        //const error = this.errorHandler(e);
      },
      complete: () => console.log("PROCESS COMPLETE"),
    })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
  
}
