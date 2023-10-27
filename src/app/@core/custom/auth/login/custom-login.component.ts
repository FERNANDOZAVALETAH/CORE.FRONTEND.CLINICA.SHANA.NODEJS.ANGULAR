/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, ChangeDetectorRef  } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbLoginComponent } from '@nebular/auth';
import { IUserLoginRequest, IUserLoginResponse } from '../../../../interfaces/user';

@Component({
  selector: 'ngx-login',
  templateUrl: './custom-login.component.html',
})
export class CustomLoginComponent extends NbLoginComponent {

  user: IUserLoginRequest;

  constructor(
    protected authService: NbAuthService, 
    protected router: Router,
    protected cd: ChangeDetectorRef) {
    super(authService, {}, cd, router);
  }

  login() {
    console.log(`${CustomLoginComponent.name}::login`);
    this.authService.authenticate('auth', this.user)
      .subscribe((authResult) => {
        if (authResult.isSuccess()) {
          const response : IUserLoginResponse = authResult.getResponse().body;
          localStorage.setItem('authToken', response.data.token);
          this.router.navigate(['/pages/dashboard']);
        } else {
          console.error(`${CustomLoginComponent.name}::login::error`, authResult.getErrors());
        }
      });
  }
  
}