import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthAccessService } from '../dbaccess/auth-access.service';

/*
 * @Author: Stephan Dünkel
 * @Date: 2019-07-22 12:48:03
 * @Last Modified by: Stephan Dünkel
 * @Last Modified time: 2019-07-22 13:25:40
 *
 * The AuthGuard.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthAccessService,
    private router: Router
    ) { }

  canActivate() {
    if (this.authService.userIsLoggedIn()) {
      this.router.navigate(['/home']);
    }

    return !this.authService.userIsLoggedIn();
  }
}
