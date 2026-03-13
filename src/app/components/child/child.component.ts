import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
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
    } else {
      this.userForm.markAllAsTouched();
    }

  }

}
