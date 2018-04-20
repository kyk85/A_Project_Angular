import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loginForm: FormGroup;

  user = [];

  constructor(public formBuilder: FormBuilder,
              public router: Router,
              public authService: AuthService) {
    this.loginForm = formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  ngOnInit() {
  }

  login() {
    const credentials = this.loginForm.value;
    console.log(credentials);

    this.authService.login(credentials).then((result) => {
      this.router.navigateByUrl('/collection');
    }).catch(error => {
      console.log(error);
    });
  }

}
