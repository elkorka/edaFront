import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {inject} from '@angular/core';


export const authenticationGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  const authservice=inject(AuthService);
  const rout = inject(Router);
  if (authservice.isAuthenticated){
    return true;
  }else {
    rout.navigateByUrl("/login")
    return false;
  }

};
