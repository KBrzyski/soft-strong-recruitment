import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task5Component } from './task5/task5.component';
import { Task5ChildComponent } from './task5/task5-child/task5-child.component';

@NgModule({
  declarations: [
    AppComponent,
    Task5Component,
    Task5ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }