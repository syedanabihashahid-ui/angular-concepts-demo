import { Component, signal, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child/child.component';
import { SharedStateService, User } from '../../services/shared-state.service'; // <- import service
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, CommonModule],
  template: `
    <div style="padding: 20px; border: 1px solid #ccc; margin-top: 20px;">
      <h2>Parent Component</h2>
      <p>This component receives data emitted by the child component.</p>
      
      <app-child (userSubmit)="getUserData($event)"></app-child>

      <!-- Component State using Signal -->
      <div *ngIf="receivedUser()" style="margin-top: 20px; padding: 10px; background-color: #eef;">
        <h3>Received Data (Signal):</h3>
        <p><strong>Name:</strong> {{ receivedUser()?.name }}</p>
        <p><strong>Email:</strong> {{ receivedUser()?.email }}</p>
        <p><strong>Password:</strong> {{ receivedUser()?.password }}</p>
      </div>

      <!-- Component State using Service (BehaviorSubject) -->
      <div *ngIf="serviceUser" style="margin-top: 20px; padding: 10px; background-color: #ffe;">
        <h3>Received Data (Service):</h3>
        <p><strong>Name:</strong> {{ serviceUser?.name }}</p>
        <p><strong>Email:</strong> {{ serviceUser?.email }}</p>
        <p><strong>Password:</strong> {{ serviceUser?.password }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnDestroy {

  // Component State using Signals
  readonly receivedUser = signal<User | null>(null);

  // Component State using Service
  serviceUser: User | null = null;

  private destroy$ = new Subject<void>();

  constructor(private stateService: SharedStateService) {
    // Subscribe to service BehaviorSubject
    this.stateService.user$
      .pipe(takeUntil(this.destroy$))
      .subscribe(user => {
        this.serviceUser = user;
      });
  }

  getUserData(data: User) {
    // Update signal state
    this.receivedUser.set(data);

    // Update service state
    this.stateService.setUser(data);

    console.log('Received from child:', data);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}