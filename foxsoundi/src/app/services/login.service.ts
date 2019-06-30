import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaderResponse, HttpHeaders,
  HttpProgressEvent,
  HttpResponse,
  HttpSentEvent,
  HttpUserEvent
} from '@angular/common/http';
import { ConnectInfo, LoginRoot } from '../lib/login';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': ''
  })
};

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  loginRoot: LoginRoot;
  //profilConnect: ConnectInfo;

  URI = 'https://foxsoundi2.azurewebsites.net/';

  constructor(private http: HttpClient) {
    const profilConnect: ConnectInfo[] = [
      {
        email: 'yoyo@gmail.com',
        password: '******'
      }
    ];
    this.loginConnect(profilConnect);
  }

  loginConnect(profilConnect: ConnectInfo[]): void {
    this.http.post<LoginRoot>(this.URI + 'v1/player/login', profilConnect[0], httpOptions)
      .subscribe(result => {
          console.log('TEST LOGIN BEGIN');
          this.loginRoot = result;
          console.log(result);
          console.log(this.loginRoot );
          console.log('TEST LOGIN END');
        },
        console.error
      );
  }


}
