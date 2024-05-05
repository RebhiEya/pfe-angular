import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this.auth.getCurrentUser();
    // Assuming currentUser contains role information
    if (currentUser && currentUser.roles === 'EMPLOYEE') {
      return true;
    } else {
      // Redirect unauthorized users to a different route
      this.router.navigateByUrl('/unauthorize');
      return false;
    }
  }
}
