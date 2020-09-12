import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Task3Component } from '../app/task3/task3.component';
import { Task4Component } from '../app/task4/task4.component';
import { Task5Component } from '../app/task5/task5.component';
import { Task6Component } from '../app/task6/task6.component';

const routes: Routes = [
  { path: 'task3', component: Task3Component },
  { path: 'task4', component: Task4Component },
  { path: 'task5', component: Task5Component },
  { path: 'task6', component: Task6Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
