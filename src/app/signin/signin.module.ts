import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';

import { SigninComponent } from '../signin/signin.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginModule } from '../login/login.module';
import { RegisterModule } from '../register/register.module';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {MatTabsModule} from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

// import { environment } from '../environments/environment';

/**
 * The LoginModule module of the app.
 *
 * @Author: Stephan Dünkel
 * @Date: 2019-06-10 00:15:37
 * @Last Modified by: Stephan Dünkel
 * @Last Modified time: 2019-07-18 19:04:22
 */
@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    BrowserAnimationsModule,
    LoginModule,
    RegisterModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    SigninComponent
  ],
  entryComponents: [
    SigninComponent
  ],
  providers: [],
  bootstrap: [SigninComponent]
})
export class SigninModule { }
