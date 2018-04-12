import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contactForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {

    this.contactForm = formBuilder.group({
      contactName: [''],
      contactEmail: [''],
      contactInquiry: ['']
    });

  }

  ngOnInit() {
  }

  login() {
    console.log('it worked!');
  }

}
