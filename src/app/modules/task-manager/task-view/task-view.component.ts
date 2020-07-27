import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {List} from '../../../models/tm/list.model';
import {Task} from '../../../models/tm/task.model';
import {TaskManagerService} from '../../../shared/services/task-manager.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {AuthService} from '../../../shared/services/auth.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {
  lists: List[];
  tasks: Task[];
  selectedListId: string;

  constructor( private taskSrv: TaskManagerService,
               private route: ActivatedRoute,
               private router: Router,
               public dialog: MatDialog,
               private authSrv: AuthService) {

  }


  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      if(params.listId){
        this.selectedListId = params.listId;
        this.taskSrv.getTasks(params.listId).subscribe((tasks: any) => {
          this.tasks = tasks;
        });
      }else{
        this.tasks = undefined;
      }
    });

    this.taskSrv.getLists().subscribe((lists:any[]) => {
      this.lists = lists;
    });

  }

  onTaskClick(task: Task): any{
    // we want to set the task to selected
    this.taskSrv.complete(task).subscribe(() => {
      console.log('completed successfully');
      task.completed = !task.completed;
    });
  }

  // Click on delete list
  onDeleteListClick(): void{
    this.taskSrv.deleteList(this.selectedListId).subscribe((res) => {
      //this.router.navigate(['/lists']);
      console.log(res);
      this.taskSrv.getLists().subscribe((lists:any[]) => {
        this.lists = lists;
        this.tasks = [];
        this.router.navigate(['/tm/lists']);
      });
    })
  }

  // click on delete task
  onDeleteTaskClick(taskId: string): void{
    this.taskSrv.deleteTask(this.selectedListId, taskId).subscribe((res) => {
      this.tasks = this.tasks.filter(val => val._id !== taskId);
      console.log(res);
    });
  }

  openModelNewList(): void{
      const dialogRef = this.dialog.open(NewListDialogComponent, {
        width: '300px',
        data: ''
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.taskSrv.getLists().subscribe((lists:any[]) => {
          this.lists = lists;
        });
      });
  }

  openModelEditList(listId): void{
    const dialogRef = this.dialog.open(EditListDialogComponent, {
      width: '300px',
      data: listId
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.taskSrv.getLists().subscribe((lists:any[]) => {
        this.lists = lists;
      });
    });
  }


  // ajout d'une nouvelle task
  openModelNewTask(listId): void{
    console.log(listId)
    console.log(this.selectedListId)
    const dialogRef = this.dialog.open(NewTaskDialogComponent, {
      width: '300px',
      data: listId
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.taskSrv.getLists().subscribe((lists:any[]) => {
          this.lists = lists;
        });
        this.selectedListId = result;
        this.taskSrv.getTasks(result).subscribe((tasks: any) => {
          this.tasks = tasks;
        });
      }
    });
  }

  // modifiction d'une task specifique
  openModelEditTask(listId, taskId): void{
    const dialogRef = this.dialog.open(EditTaskDialogComponent, {
      width: '300px',
      data: {listId,  taskId}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.taskSrv.getLists().subscribe((lists:any[]) => {
        this.lists = lists;
      });
      this.selectedListId = result;
      this.taskSrv.getTasks(result).subscribe((tasks: any) => {
        this.tasks = tasks;
      });
    });
  }

}

// -----------------------------------------------------------------------------------------------------------------------------

@Component({
  selector: 'app-new-list-dialog',
  templateUrl: './new-list.html',
  styleUrls: ['./task-view.component.scss']
})
export class NewListDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<NewListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private tmSrv: TaskManagerService) {}

    createList(title : string): void{
      this.tmSrv.createList(title).subscribe((list : List)=>{
        this.dialogRef.close(list._id);
        // once the list is created, we navigate to main page and select the list
        // console.log(response);
        //this.router.navigate( ['/lists', list._id]);
      });
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

}

// --------------------------------------------------------------------------------------------------------------------------------
@Component({
  selector: 'app-edit-list-dialog',
  templateUrl: './edit-list.html',
  styleUrls: ['./task-view.component.scss']
})
export class EditListDialogComponent {
  listId: string;

  constructor(
    public dialogRef: MatDialogRef<EditListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private tmSrv: TaskManagerService) {
      this.listId = data;
  }

  updateList(title: string): void{
    console.log('going to update and close')
    console.log(this.listId)
    this.tmSrv.updateList(this.listId, title).subscribe(()=>{
      this.dialogRef.close(this.listId);
      //this.router.navigate(['/lists', this.listId]);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

// -----------------------------------------------------------------------------------------------------------------------------

@Component({
  selector: 'app-new-task-dialog',
  templateUrl: './new-task.html',
  styleUrls: ['./task-view.component.scss']
})
export class NewTaskDialogComponent {
  listId : string;
  constructor(
    public dialogRef: MatDialogRef<NewTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private tmSrv: TaskManagerService) {
    this.listId = data;
    console.log(this.listId)
  }

    createTask(title: string): void{
      this.tmSrv.createTask(title, this.listId).subscribe((newtask : Task)=>{
        // once the list is created, we navigate to main page and select the list
        // console.log(response);
        this.dialogRef.close(this.listId);
      });
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

}

// -----------------------------------------------------------------------------------------------------------------------------

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: './edit-task.html',
  styleUrls: ['./task-view.component.scss']
})
export class EditTaskDialogComponent {
  listId: string;
  taskId: string;

  constructor(
    public dialogRef: MatDialogRef<EditTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private tmSrv: TaskManagerService) {
    this.listId = data.listId;
    this.taskId = data.taskId;

    console.log(this.listId);
    console.log(this.taskId);
  }

  updateTask(title: string){
    this.tmSrv.updateTask(this.listId, this.taskId, title).subscribe(()=>{
      this.dialogRef.close(this.listId);
      //this.router.navigate(['/lists', this.listId]);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

