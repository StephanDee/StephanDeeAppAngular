import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  @Output()
  userIsLoggedIn: EventEmitter<boolean> = new EventEmitter<boolean>();

  public loginForm: FormGroup;

  constructor(public formBuilder: FormBuilder) { }

  /**
   * When Component initialized.
   */
  ngOnInit() {
    this.initForm();
  }

  /**
   * When the LoginComponent is left.
   */
  public ngOnDestroy(): void {
  }

  /**
   * Initialize the form.
   */
  public initForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.maxLength(255)]],
      password: ['', [Validators.required, Validators.maxLength(2048)]]
    });
  }

  /**
   * Login if verifycation succeded.
   *
   * @param email the user email
   * @param password the user password
   */
  public onSubmitButtonClicked(email, password): void {
    this.userIsLoggedIn.emit(true);
    console.log('logged in with email: ' + email + ' and password: ' + password);
  }
}
