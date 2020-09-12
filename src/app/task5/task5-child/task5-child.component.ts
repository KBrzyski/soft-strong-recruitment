import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task5-child',
  templateUrl: './task5-child.component.html',
  styleUrls: ['./task5-child.component.scss']
})
export class Task5ChildComponent{

  @Input() childMessage: string;

  constructor() { }

}
