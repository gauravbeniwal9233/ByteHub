import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authChildGuard: CanActivateFn = (route, state) => {
  const _router=inject(Router);
  

  let isLoggin=sessionStorage.getItem("isLoggedIn");
  if (isLoggin=="false") {
    alert("Due to rights access, redirecting to login page !!");
    _router.navigate(['login']);
    return false;
  }
  return true;
};
