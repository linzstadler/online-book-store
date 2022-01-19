import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {TokenService} from "../services/token/token.service";



@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private tokenService: TokenService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.tokenService.checkToken()) {
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }
}

@Injectable({providedIn: 'root'})
export class AuthGuardLogin implements CanActivate {
  constructor(
    private router: Router,
    private tokenService: TokenService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.tokenService.checkToken()) {
      this.router.navigateByUrl('/');
    }
    return true;
  }
}


