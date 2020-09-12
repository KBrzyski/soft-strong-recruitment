import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Task5Component } from '../app/task5/task5.component';

const routes: Routes = [
  { path: 'task5', component: Task5Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
