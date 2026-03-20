import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {

  name = "nabiha shahid";
  salary = 5000;
  today = new Date();

  ngOnInit(){
    console.log("UserProfile Initialized");
  }

}
