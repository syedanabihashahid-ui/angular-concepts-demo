import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="userForm" (ngSubmit)="submitForm()" style="padding: 15px; border: 1px solid #ccc; border-radius: 4px;">
      <h3>Child Component Form</h3>
      <div style="margin-bottom: 10px;">
        <label style="display: block;">Name:</label>
        <input formControlName="name" type="text" placeholder="Enter name">
      </div>
      <div style="margin-bottom: 10px;">
        <label style="display: block;">Email:</label>
        <input formControlName="email" type="email" placeholder="Enter email">
      </div>
      <div style="margin-bottom: 10px;">
        <label style="display: block;">Password:</label>
        <input formControlName="password" type="password" placeholder="Enter password">
      </div>
      <button type="submit" [disabled]="userForm.invalid">Send to Parent</button>
    </form>
  `,
})
export class ChildComponent {
  @Output() userSubmit = new EventEmitter<any>();
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  submitForm() {
    if (this.userForm.valid) {
      this.userSubmit.emit(this.userForm.value);
    }
  }
}
