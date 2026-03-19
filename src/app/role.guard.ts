import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const expectedRole = route.data['expectedRole'];

  if (!authService.isLoggedIn() || authService.userRole() !== expectedRole) {
    console.log(
      `RoleGuard: Access denied. Expected role: '${expectedRole}', but user has role: '${authService.userRole()}'. Redirecting.`
    );
    // For this demo, redirect to the dashboard's base if the role doesn't match
    return router.parseUrl('/dashboard');
  }

  return true; // User has the expected role, allow access
};