import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _router: Router) { }

  logout(): void {
    sessionStorage.setItem("isLoggedIn", "false");
    this._router.navigate(['login']);
  }
}
