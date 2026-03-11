import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>{{ parentData }}</p>
    <button (click)="sendData()">Send to Parent</button>
  `,
})
export class ChildComponent {
  @Input() parentData = '';
  @Output() childEvent = new EventEmitter<string>();

  sendData() {
    this.childEvent.emit('Hello Parent');
  }
}
