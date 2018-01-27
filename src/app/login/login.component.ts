import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  logins;

  constructor(loginsService : LoginService) {
    this.logins = loginsService.login;
   }

  ngOnInit() {
    
  }

}
