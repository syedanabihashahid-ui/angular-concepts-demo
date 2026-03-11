import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {

  username = "";

  registerForm: FormGroup;

  constructor(private fb: FormBuilder){

    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.minLength(6)]
    });

  }

  submit(){
    console.log(this.registerForm.value);
  }

}