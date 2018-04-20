import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

import { Router } from '@angular/router';



@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/main');
  }

}
