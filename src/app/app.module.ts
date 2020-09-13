import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task5Component } from './task5/task5.component';
import { Task5ChildComponent } from './task5/task5-child/task5-child.component';
import { Task3Component } from './task3/task3.component';
import { Task6Component } from './task6/task6.component';
import { ChangeColorDirective } from './task6/change-color.directive';
import { Task4Component } from './task4/task4.component';
import { Task1Component } from './task1/task1.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Task5Component,
    Task5ChildComponent,
    Task3Component,
    Task6Component,
    ChangeColorDirective,
    Task4Component,
    Task1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
