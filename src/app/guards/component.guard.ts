import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthAccessService } from '../dbaccess/auth-access.service';

/*
 * @Author: Stephan Dünkel
 * @Date: 2019-07-22 12:48:03
 * @Last Modified by: Stephan Dünkel
 * @Last Modified time: 2019-07-22 13:41:50
 *
 * The ComponentGuard.
 */
@Injectable({
  providedIn: 'root'
})
export class ComponentGuard implements CanActivate {

  constructor(
    private authService: AuthAccessService,
    private router: Router
    ) { }

  canActivate() {
    if (!this.authService.userIsLoggedIn()) {
      this.router.navigate(['/signin']);
    }

    return this.authService.userIsLoggedIn();
  }
}
