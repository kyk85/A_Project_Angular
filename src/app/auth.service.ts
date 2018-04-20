import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  public token: any;
  public userId: any;

  constructor(public http: HttpClient) { }

  login(credentials) {
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

      this.http.post('https://a-project-ada.herokuapp.com/api/auth/login', JSON.stringify(credentials), httpOptions)
        .subscribe(res => {
          const data = res;
          this.token = data['token'];
          this.userId = data['user']._id;
          localStorage.setItem('token', data['token']);
          localStorage.setItem('userId', data['user']._id);
          resolve(data);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  logout() {
    localStorage.setItem('token', '');
    localStorage.setItem('userId', '');
  }

}
