import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logoMarque  = 'assets/img/foxsoundi.png';

  constructor(login: LoginService) { }

  ngOnInit() {
  }

}
