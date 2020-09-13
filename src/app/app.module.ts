import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task5Component } from './task5/task5.component';
import { Task5ChildComponent } from './task5/task5-child/task5-child.component';
import { Task3Component } from './task3/task3.component';
import { Task6Component } from './task6/task6.component';
import { ChangeColorDirective } from './task6/change-color.directive';
import { Task4Component } from './task4/task4.component';
import { Task1Component } from './task1/task1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Task7Component } from './task7/task7.component';
import { Task8Component } from './task8/task8.component';
import { Task9Component } from './task9/task9.component';
import { Task9distantComponent } from './task9distant/task9distant.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    Task5Component,
    Task5ChildComponent,
    Task3Component,
    Task6Component,
    ChangeColorDirective,
    Task4Component,
    Task1Component,
    Task7Component,
    Task8Component,
    Task9Component,
    Task9distantComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
