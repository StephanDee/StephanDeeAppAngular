import { AuthAccessService } from './../dbaccess/auth-access.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public router: Router,
    public authAccessService: AuthAccessService
  ) { }

  ngOnInit() {
  }

  public async userLogout(): Promise<void> {
    await this.authAccessService.logout();
    this.router.navigate(['/signin']);
  }

}
