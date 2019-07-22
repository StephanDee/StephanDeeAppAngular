import { Router } from '@angular/router';
import { AuthAccessService } from '../dbaccess/auth-access.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public loginForm: FormGroup;

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public authAccessService: AuthAccessService
  ) { }

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
  public async onSubmitButtonClicked(email, password): Promise<void> {
    await this.authAccessService.login(email, password);
    if (this.authAccessService.userIsLoggedIn) {
      this.router.navigate(['/home']);
    }
  }
}
