import { Injectable } from '@angular/core';
import {WebRequestService} from './web-request.service';
import {Task} from 'src/app/models/tm/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

  constructor(private webReqSrv: WebRequestService) { }

  // get all lists
  getLists(): any{
    return this.webReqSrv.get('lists');
  }

  // Create a new List
  createList(title: string): any{
    return this.webReqSrv.post('lists',{title});
  }

  // Update a List
  updateList(id: string, title: string): any{
    return this.webReqSrv.patch(`lists/${id}`,{title});
  }

  // update a specific task
  updateTask(listId: string, taskId: string, title: string): any{
    console.log(listId)
    console.log(taskId)
    console.log(title)
    return this.webReqSrv.patch(`lists/${listId}/tasks/${taskId}`,{title});
  }

  // delete a list and his tasks
  deleteList(id: string): any{
    return this.webReqSrv.delete(`lists/${id}`);
  }


  // get all tasks of a list
  getTasks(listId): any{
    return this.webReqSrv.get(`lists/${listId}/tasks`);
  }

  // create a task in a list
  createTask(title: string, listId: string){
    return this.webReqSrv.post(`lists/${listId}/tasks`,{title});
  }

  // delete a specific task
  deleteTask(listId: string, taskId: string){
    return this.webReqSrv.delete(`lists/${listId}/tasks/${taskId}`);
  }
  // to validate a task
  complete(task : Task){
    return this.webReqSrv.patch(`lists/${task._listId}/tasks/${task._id}`,{completed : !task.completed})
  }

}
