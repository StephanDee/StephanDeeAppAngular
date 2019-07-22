import { AuthAccessService } from '../dbaccess/auth-access.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';

import { HeaderComponent } from './header.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule} from '@angular/material/menu';

/**
 * The HeaderModule module of the app.
 *
 * @Author: Stephan Dünkel
 * @Date: 2019-06-10 00:15:37
 * @Last Modified by: Stephan Dünkel
 * @Last Modified time: 2019-07-22 14:28:10
 */
@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports: [
    HeaderComponent
  ],
  entryComponents: [
    HeaderComponent
  ],
  providers: [AuthAccessService],
  bootstrap: [HeaderComponent]
})
export class HeaderModule { }
