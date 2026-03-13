import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, NgIf],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  receivedUser: any = null;

  getUserData(data: any) {
    this.receivedUser = data;
    console.log('Received from child:', data);
  }

}
