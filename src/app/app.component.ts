import { Component, OnInit, OnDestroy } from '@angular/core';

/**
 * The AppComponent the root component of the app.
 *
 * @Author: Stephan Dünkel
 * @Date: 2019-06-11 13:52:51
 * @Last Modified by: Stephan Dünkel
 * @Last Modified time: 2019-07-22 13:49:09
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent implements OnInit, OnDestroy {

  /**
   * The constructor of AppComponent.
   */
  constructor() {
  }

  /**
   * Initialize the AppComponent.
   */
  public ngOnInit(): void {
  }

  /**
   * When the AppComponent is left.
   * Unsubscribes all Subscriptions.
   */
  public ngOnDestroy(): void {
  }
}
