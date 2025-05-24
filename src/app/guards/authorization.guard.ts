import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../services/auth.service';

export const authorizationGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const rout = inject(Router);

  if (authService.role.include("ADMIN")){
      return true
  }else {
    rout.navigateByUrl("/admin/notAuthorized")
    return false;
  }
};
