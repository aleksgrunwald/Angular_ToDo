import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-list-manager',
  template: `
  <section class="todo-app">
  
  <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>
  <ul>
    <li *ngFor="let toDoItem of todoList">
      <app-todo-item [item]="toDoItem"></app-todo-item>
    </li>
  </ul>


</section>
  `,
  styleUrls: ['./list-manager.component.sass']
})
export class ListManagerComponent implements OnInit {

  todoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  constructor() { }

  ngOnInit() {
  }

    
  addItem(title: string) {    
    this.todoList.push({ title });
  }

}
