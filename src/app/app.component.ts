import { Component } from '@angular/core';
import { TodoItem } from './interfaces/todo-item';

@Component({
  selector: 'app-root',
  template: `
    <app-list-manager></app-list-manager>
  `,
  styleUrls: ['./app.component.sass']
})
export class AppComponent {


}
