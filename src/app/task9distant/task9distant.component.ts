import { Component, OnInit } from '@angular/core';
import { DataService } from "../shared/data.service";

@Component({
  selector: 'app-task9distant',
  templateUrl: './task9distant.component.html',
  styleUrls: ['./task9distant.component.scss']
})
export class Task9distantComponent implements OnInit {

  message:string;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  newMessage() {
    this.data.changeMessage("do widzenia")
  }

}
