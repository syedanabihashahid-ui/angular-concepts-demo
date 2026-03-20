import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../../services/shared-state.service';

@Component({
  selector: 'app-user-details',
  template: `
    <div style="margin-top:10px; padding:10px; border:1px solid #ccc;">
      <p><strong>Name:</strong> {{ user?.name }}</p>
      <p><strong>Email:</strong> {{ user?.email }}</p>
      <p><strong>Password:</strong> {{ user?.password }}</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent {
  @Input() user: User | null = null;
}