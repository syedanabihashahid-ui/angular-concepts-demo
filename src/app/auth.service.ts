import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Using signals to manage authentication state and role
  readonly isLoggedIn = signal(false);
  readonly userRole = signal<'user' | 'admin' | null>(null);

  // Simulate logging in
  login(role: 'user' | 'admin'): void {
    this.isLoggedIn.set(true);
    this.userRole.set(role);
    console.log(`Logged in as ${role}`);
  }

  // Simulate logging out
  logout(): void {
    this.isLoggedIn.set(false);
    this.userRole.set(null);
    console.log('Logged out');
  }
}