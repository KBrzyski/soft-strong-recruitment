import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-task8',
  templateUrl: './task8.component.html',
  styleUrls: ['./task8.component.scss']
})
export class Task8Component implements OnInit {

  profileForm: FormGroup;
  user:User;

  constructor(private formBuilder: FormBuilder) {
    this.profileForm = this.formBuilder.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      nick: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  onSubmit(data):void{
    this.user = data as User;
  }

}

class User {
  firstName: string;
  lastName: string;
  nick: string;
}
