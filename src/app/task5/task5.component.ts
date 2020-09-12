import { Component } from '@angular/core';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.scss']
})
export class Task5Component {
  parentMessage = 0
  constructor() { }

  increment() : void{
    this.parentMessage += 1;
  }

}
