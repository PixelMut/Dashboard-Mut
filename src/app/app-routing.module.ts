import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultComponent} from './layouts/default/default.component';
import {DashboardComponent} from './modules/dashboard/dashboard.component';
import {PostsComponent} from './modules/posts/posts.component';
import {TictactoeComponent} from './modules/tictactoe/tictactoe.component';
import {Covid19Component} from './modules/covid19/covid19.component';
import {TaskViewComponent} from './modules/task-manager/task-view/task-view.component';


const routes: Routes = [
  { path: '', component : DefaultComponent, children : [
    { path : '', component : DashboardComponent },
    { path : 'posts', component : PostsComponent },
    { path : 'tictactoe', component : TictactoeComponent },
    { path : 'covid19', component : Covid19Component },
    { path : 'tm/lists', component : TaskViewComponent},
    { path : 'tm/lists/:listId', component : TaskViewComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
