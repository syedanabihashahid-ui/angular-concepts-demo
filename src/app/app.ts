import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div style="padding: 20px;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
        <h1>{{ title() }}</h1>
        <div style="display: flex; gap: 10px; align-items: center; border: 1px solid #ccc; padding: 10px; border-radius: 8px;">
          <span>Status: <strong>{{ authService.isLoggedIn() ? 'Logged In as ' + authService.userRole() : 'Logged Out' }}</strong></span>
          @if (!authService.isLoggedIn()) {
            <button (click)="authService.login('user')">Login as User</button>
            <button (click)="authService.login('admin')">Login as Admin</button>
          } @else {
            <button (click)="authService.logout()">Logout</button>
          }
        </div>
      </div>
      <nav>
        <ul style="display: flex; gap: 15px; list-style: none; padding: 0;">
          <li><a routerLink="/" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
          <li><a routerLink="/user-form" routerLinkActive="active-link">User Form</a></li>
          <li><a routerLink="/parent-child" routerLinkActive="active-link">Parent-Child</a></li>
          <li><a routerLink="/dashboard" routerLinkActive="active-link">Dashboard (Protected)</a></li>
        </ul>
      </nav>
      <hr />
      <p>
        <strong>How to test:</strong>
        Try accessing the 'Dashboard' link while logged out. The <code>AuthGuard</code> will redirect you home.
        Then, log in as a 'user' and access the dashboard. Finally, log in as 'admin' to see the 'Admin Area' button appear inside the dashboard, which is protected by the <code>RoleGuard</code>.
      </p>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('angular-concepts-project');
  protected readonly authService = inject(AuthService);
}
