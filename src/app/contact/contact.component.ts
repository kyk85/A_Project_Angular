import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EmailService } from '../email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contactForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
              public emailService: EmailService) {

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

  sendInquiry() {
    const details = this.contactForm.value;
    console.log(details);
    this.emailService.sendInquiry(details).then((result) => {
      console.log(result);
    });
  }

}
