import { AuthAccessService } from './dbaccess/auth-access.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

/**
 * The AppComponent the root component of the app.
 *
 * @Author: Stephan Dünkel
 * @Date: 2019-06-11 13:52:51
 * @Last Modified by: Stephan Dünkel
 * @Last Modified time: 2019-06-16 21:45:27
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent implements OnInit, OnDestroy {

  public userLoggedIn = false;

  /**
   * The constructor of AppComponent.
   */
  constructor(public authAccessService: AuthAccessService) {
  }

  /**
   * Initialize the AppComponent.
   */
  public ngOnInit(): void {
    console.log(this.authAccessService.getToken());
  }

  /**
   * When the AppComponent is left.
   * Unsubscribes all Subscriptions.
   */
  public ngOnDestroy(): void {
  }

  onUserIsLoggedInEvent(event) {
    if (event) {
      this.userLoggedIn = true;
    }
  }
}
