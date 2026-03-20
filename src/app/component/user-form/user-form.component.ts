import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  @Output() userSubmit = new EventEmitter<any>();
  submittedData: any = null;

  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  get name() {
    return this.registerForm.get('name');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  submit() {
    if (this.registerForm.valid) {
      // Note: Displaying the password is a security risk in a real application.
      this.submittedData = this.registerForm.value;
      this.userSubmit.emit(this.registerForm.value);
    } else {
      // If the form is invalid, mark all fields as touched to trigger validation messages
      this.registerForm.markAllAsTouched();
    }
  }
}
