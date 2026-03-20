import { Routes } from '@angular/router';
import { UserFormComponent } from './component/user-form/user-form.component';
import { ParentComponent } from './component/parent/parent.component';
import { HomeComponent } from './component/user-form/home.component';
import { DashboardComponent } from './component/user-form/dashboard.component';
import { UserProfileComponent } from './component/user-profile.component/user-profile.component';
import { SettingsComponent } from './component/user-form/settings.component';
import { AdminComponent } from './component/admin.component';
import { authGuard } from './auth.guard';
import { roleGuard } from './role.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },

  { path: 'user-form', component: UserFormComponent, title: 'User Form' },

  { path: 'parent-child', component: ParentComponent, title: 'Parent-Child Demo' },

  // ✅ Lazy Loaded Component (NEW)
  {
    path: 'user',
    loadComponent: () =>
      import('./component/user/user.component').then(m => m.UserComponent),
    title: 'Lazy User Page'
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard',
    canActivate: [authGuard],

    // ✅ Nested (Child) Routes
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },

      { path: 'profile', component: UserProfileComponent, title: 'User Profile' },

      { path: 'settings', component: SettingsComponent, title: 'Settings' },

      {
        path: 'admin',
        component: AdminComponent,
        title: 'Admin Area',
        canActivate: [roleGuard],
        data: { expectedRole: 'admin' }
      }
    ],
  },

  // ✅ Optional: fallback route
  { path: '**', redirectTo: '' }
];