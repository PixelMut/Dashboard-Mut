import { Injectable } from '@angular/core';
import {WebRequestService} from './web-request.service';
import {Task} from 'src/app/models/tm/task.model';
import {AuthService} from './auth.service';
import {List} from '../../models/tm/list.model';
import {LIST} from '../../models/tm/mock-list';
import {Observable, of} from 'rxjs';
import {TASKS} from '../../models/tm/mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {
  // to have an offline mode
  mock_list: List[] = LIST;
  mock_tasks: Task[] = TASKS;

  constructor(private webReqSrv: WebRequestService, private authSrv: AuthService) { }

  // get all lists
  getLists(): Observable<List[]>{
    if(this.authSrv.isLogged === true){
      return this.webReqSrv.get('lists');
    }else{
      return of(this.mock_list);
    }
  }

  // Create a new List
  createList(title: string): Observable<any>{
    if(this.authSrv.isLogged === true){
      return this.webReqSrv.post('lists', {title});
    }else{
      const id = Math.random().toString(36).substring(7);
      const newList: List = {
        _id : id,
        title : title
      };
      this.mock_list.push(newList);
      //console.log(this.mock_list)
      return of(newList);
    }
  }

  // Update a List
  updateList(id: string, title: string): Observable<any>{
    if(this.authSrv.isLogged === true){
      return this.webReqSrv.patch(`lists/${id}`,{title});
    }else{
      this.mock_list.filter(list => list._id === id)[0].title = title;
      return of(this.mock_list);
    }

  }

  // update a specific task
  updateTask(listId: string, taskId: string, title: string): Observable<any>{
    if(this.authSrv.isLogged === true){
      return this.webReqSrv.patch(`lists/${listId}/tasks/${taskId}`,{title});
    }else{
      this.mock_tasks.filter(task => task._id === taskId)[0].title = title;
      return of(this.mock_tasks);
    }
  }

  // delete a list and his tasks
  deleteList(id: string): Observable<any>{
    if(this.authSrv.isLogged === true){
      return this.webReqSrv.delete(`lists/${id}`);
    }else{
      //console.log(this.mock_list.findIndex(list=>list._id === id));
      this.mock_list.splice(this.mock_list.findIndex(list=>list._id === id),1);
      return of(this.mock_list);
    }
  }


  // get all tasks of a list
  getTasks(listId): Observable<any>{
    if(this.authSrv.isLogged === true){
      return this.webReqSrv.get(`lists/${listId}/tasks`);
    }else{
      const tasks: Task[] = this.mock_tasks.filter(a => a._listId === listId);
      // const articles: Article[] = ARTICLES.filter(a => a.key === key);
      return of(tasks);
    }

  }

  // create a task in a list
  createTask(title: string, listId: string): Observable<any>{
    if(this.authSrv.isLogged === true){
      return this.webReqSrv.post(`lists/${listId}/tasks`,{title});
    }else{
      const id = Math.random().toString(36).substring(7);
      const newTask: Task = {
        _id : id,
        title : title,
        _listId: listId,
        completed : false
      };
      this.mock_tasks.push(newTask);
      return of(newTask);
    }
  }

  // delete a specific task
  deleteTask(listId: string, taskId: string): Observable<any>{
    if(this.authSrv.isLogged === true){
      return this.webReqSrv.delete(`lists/${listId}/tasks/${taskId}`);
    }else{
      this.mock_tasks.splice(this.mock_tasks.findIndex(task=>task._id === taskId),1);
      return of(this.mock_tasks);
    }

  }
  // to validate a task
  complete(task : Task): any{
    if(this.authSrv.isLogged === true){
      return this.webReqSrv.patch(`lists/${task._listId}/tasks/${task._id}`,{completed : !task.completed})
    }else{
      this.mock_tasks.filter(task => task._id === task._id)[0].completed = !task.completed;
      return of(this.mock_tasks);
    }
  }

}
