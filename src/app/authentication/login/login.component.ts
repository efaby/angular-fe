import { Component } from '@angular/core';
import {LoginService} from './../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})



export class LoginComponent {

public auth: any;
  constructor(private loginService: LoginService, private router: Router) {
    this.auth = {
      username: "",
      password: ""
    }
  }

  loginform = true;
  recoverform = false;
  
  message = "";
  showRecoverForm() {
    this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
  }

  login() {
    const value = {
      email: this.auth.username,
      password: this.auth.password
    }
    console.log(this);
    this.loginService.autenticate(value).subscribe(
        res => {
          console.log(res);
          if (res && res.status !== "error") {
            localStorage.setItem('token-user', JSON.stringify({ token: res.token }));
            this.router.navigate(['/tables/crud']);
          } else {
            this.message = res.message;
          }
          
      },error => console.log(error));
  }

  submitForm(){
    alert("llego");
  }
}
