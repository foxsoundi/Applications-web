import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConnectInfo, LoginRoot } from '../lib/loginRaw';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'SessionId': ''
  })
};

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  loginRoot: LoginRoot;

  URI = 'https://foxsoundi2.azurewebsites.net/';

  constructor(private http: HttpClient) {
    const profilConnect: ConnectInfo =
      {
        email: 'yoyo@gmail.com',
        password: '******'
      };
    this.loginConnect(profilConnect);
  }

  loginConnect(profilConnect: ConnectInfo): void {
    this.http.post<LoginRoot>(this.URI + 'v1/player/login', profilConnect, httpOptions)
      .subscribe(result => {
          this.loginRoot = result;
        },
        console.error
      );
  }


}
