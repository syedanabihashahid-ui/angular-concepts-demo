import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: true,
  template: `
    <div style="border: 2px solid red; padding: 20px; border-radius: 8px;">
      <h2>Admin-Only Area</h2>
      <p>Welcome, Administrator! You have special privileges.</p>
    </div>
  `,
})
export class AdminComponent {}