import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div style="border: 2px dashed #666; padding: 20px; border-radius: 8px;">
      <h2>Dashboard Area</h2>
      <p>This component has its own child routes. Click below to toggle them:</p>

      <nav style="margin-bottom: 20px;">
        <!-- Relative paths for child routes -->
        <button routerLink="profile" routerLinkActive="active-btn">Profile</button>
        <button routerLink="settings" routerLinkActive="active-btn" style="margin-left: 10px;">Settings</button>

        <!-- This link will only be visible to admins, thanks to the @if block -->
        @if (authService.userRole() === 'admin') {
          <button routerLink="admin" routerLinkActive="active-btn" style="margin-left: 10px;">Admin Area</button>
        }
      </nav>

      <!-- This outlet renders the Child Routes (Profile or Settings) -->
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  protected readonly authService = inject(AuthService);
}