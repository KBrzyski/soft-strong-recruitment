import { Component, OnInit } from '@angular/core';
import { Task7Service, Event } from './task7.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task7',
  templateUrl: './task7.component.html',
  styleUrls: ['./task7.component.scss']
})
export class Task7Component implements OnInit {

  events: Event[];
  repoForm: FormGroup;

  constructor(private task7Service: Task7Service, private formBuilder: FormBuilder) {
    this.repoForm = formBuilder.group({
      name: ""
    });
  }

  ngOnInit(): void {
  }

  onSubmit(name:string) {
    this.task7Service.getUsersList(name).subscribe((res) =>
    {
      this.events = [];
      this.events = res;
    });
    this.repoForm.reset();
  }

}
