import { Component, OnInit, Input } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  template: `
    <div class="todo-item">
      {{ item.title }}
    </div>
  `,
  styleUrls: ['./todo-item.component.sass']
})
export class TodoItemComponent implements OnInit {

  @Input() item: TodoItem;

  constructor() { }

  ngOnInit() {
  }


}
