import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'signin', component: SigninComponent
  },
  {
    path: 'home', component: HomeComponent
  }
  /**
   * {path: '**', component: NotFoundComponent}
   */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
