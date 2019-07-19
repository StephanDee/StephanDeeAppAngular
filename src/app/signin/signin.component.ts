import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  @Output()
  userIsLoggedIn: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  public onUserIsLoggedIn(event): void {
    this.userIsLoggedIn.emit(event);
  }

}
