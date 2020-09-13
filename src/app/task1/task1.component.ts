import { Component } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss']
})
export class Task1Component {

  cars: Cars[];
  selectedCar: number;

  constructor() {
    this.cars = [
      {id: 1, name: 'Fiat 126p'},
      {id: 2, name: 'Polonez'},
      {id: 3, name: 'Trabant'},
      {id: 4, name: 'Ford Mustang'}
    ];
    this.selectedCar = 1;
  }
}

class Cars {
  id: number;
  name: string;
}
