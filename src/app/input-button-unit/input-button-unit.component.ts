import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input-button-unit',
  template: `
    <input 
      id="input1" 
      #titleInput 
      (keyup.enter)="changeTitle($event.target.value)" 
      class="todo-input">
    <button (click)="changeTitle(titleInput.value)" class="btn">save</button>
  `,
  styleUrls: ['./input-button-unit.component.sass']
})
export class InputButtonUnitComponent implements OnInit {

  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  title: string

  generateTitle(): string {
    return 'Passed by component - title'
  }

  changeTitle(newTitle: string) {
    if (newTitle) {
      this.submit.emit(newTitle)
      console.log(newTitle)
    }
  }
}
