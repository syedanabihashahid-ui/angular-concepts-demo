import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {

  name = "nabiha shahid";
  salary = 5000;
  today = new Date();

  ngOnInit(){
    console.log("UserProfile Initialized");
  }

}
