import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  logoMarque  = 'assets/img/foxsoundi.png';
  constructor(public login: LoginService) { }

  ngOnInit() {
  }

}
