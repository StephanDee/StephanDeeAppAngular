import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { SigninModule } from './signin/signin.module';

import { AppComponent } from './app.component';

// import { environment } from '../environments/environment';

/**
 * The AppModule the root module of the app.
 *
 * @Author: Stephan Dünkel
 * @Date: 2019-06-10 00:15:37
 * @Last Modified by: Stephan Dünkel
 * @Last Modified time: 2019-07-18 19:00:33
 */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppRoutingModule,
    SigninModule,
    HomeModule
  ],
  entryComponents: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
