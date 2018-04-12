import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loginForm: FormGroup;

  user = [];

  constructor(public formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      loginEmail: [''],
      loginPassword: [''],
    });
  }

  ngOnInit() {
  }

  login() {
    console.log(this.user);
  }

}
