import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authguardGuard: CanActivateFn = (route, state) => {
  const _router=inject(Router);


  let isLoggin=sessionStorage.getItem("isLoggedIn");
  if (isLoggin=="false") {
    alert("Not Authenticated User !!");
    _router.navigate(['login']);
    return false;
  }
  return true;
};
