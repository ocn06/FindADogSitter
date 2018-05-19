import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { AuthService } from "src/app/auth.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
    let url: string = state.url;
    console.log(url);
    return this.checkLogin(url);
    //return true;
  }

  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) { 
      return true; 
    }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
}