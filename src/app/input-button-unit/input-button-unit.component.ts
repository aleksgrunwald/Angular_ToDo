import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <p>
      input-button-unit works!
      The title is: {{ title }}
    </p>
​
    <input [value]="title" id="input1">
    <button (click)="changeTitle('CLECKID!')">save</button>
  `,
  styleUrls: ['./input-button-unit.component.sass']
})
export class InputButtonUnitComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
  }

    title: string

    generateTitle(): string {
      return 'Passed by component - title'
    }

    changeTitle(msg) {
      this.title=msg;
    }
}
