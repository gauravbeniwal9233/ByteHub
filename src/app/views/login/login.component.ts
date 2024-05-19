import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: []
})
export class LoginComponent {
  constructor(
    private _router: Router,
  ) {  }


  login(userid:any,password:any){
    if(userid=='golu' && password=='123') {
      sessionStorage.setItem("isLoggedIn", "true");
      this._router.navigate(['home']);
    } else {
      alert("wrong Username or Password");
      sessionStorage.setItem("isLoggedIn", "false");
    }
  }


  

}
