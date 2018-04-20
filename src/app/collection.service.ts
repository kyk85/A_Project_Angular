import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable()
export class CollectionService {

  constructor(public http: HttpClient, public authService: AuthService) { }

  getCollection(userId) {
    return new Promise ((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': this.authService.token
        })
      };

      this.http.get('https://a-project-ada.herokuapp.com/api/book/' + userId, httpOptions)
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
          }
        );
    });
  }


}
