import { Routes } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ParentComponent } from './components/parent/parent.component';
import { HomeComponent } from './components/user-form/home.component';
import { DashboardComponent } from './components/user-form/dashboard.component';
import { UserProfileComponent } from './components/user-profile.component/user-profile.component';
import { SettingsComponent } from './components/user-form/settings.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'user-form', component: UserFormComponent, title: 'User Form' },
  { path: 'parent-child', component: ParentComponent, title: 'Parent-Child Demo' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard',
    // These are the NESTED/CHILD routes for the dashboard
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' }, // Default child route
      { path: 'profile', component: UserProfileComponent, title: 'User Profile' },
      { path: 'settings', component: SettingsComponent, title: 'Settings' },
    ],
  },
];
