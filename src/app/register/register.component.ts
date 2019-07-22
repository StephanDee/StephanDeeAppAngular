import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { AuthAccessService } from '../dbaccess/auth-access.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  public registerForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public authAccessService: AuthAccessService) {
  }

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
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(255)]],
      firstname: ['', [Validators.required, Validators.maxLength(255)]],
      lastname: ['', [Validators.required, Validators.maxLength(255)]],
      email: ['', [Validators.required, Validators.maxLength(255)]],
      password: ['', [Validators.required, Validators.maxLength(2048)]]
    });
  }

  /**
   * Register if verifycation succeded.
   *
   * @param name the user name
   * @param firstname the user firstname
   * @param lastname the user lastname
   * @param email the user email
   * @param password the user password
   */
  public async onSubmitButtonClicked(name, firstname, lastname, email, password): Promise<void> {
    const user = new User(name, firstname, lastname, email, password);
    await this.authAccessService.registerUser(user);
    await this.authAccessService.login(email, password);
    this.router.navigate(['/home']);
  }
}
