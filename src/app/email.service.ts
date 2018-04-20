import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class EmailService {

  constructor(public http: HttpClient) { }
  sendInquiry(inquiry) {
    return new Promise((resolve, reject) => {
      this.http.post('https://a-project-ada.herokuapp.com/api/inquiry/', inquiry)
      .subscribe(data => {
        resolve(data);
      }, (err) => {
        reject(err);
      });
    });
  }
}
