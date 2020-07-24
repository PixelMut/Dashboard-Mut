import { Component, OnInit } from '@angular/core';
import {Column} from '../../../models/kb/column.model';
import {Board} from '../../../models/kb/board.model';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kb-main-view',
  templateUrl: './kb-main-view.component.html',
  styleUrls: ['./kb-main-view.component.scss']
})
export class KbMainViewComponent implements OnInit {
  board : Board = new Board('test Board', [
    new Column('Ideas', [
      'Some random idea',
      'Another one',
      'And last one'
    ]),
    new Column('Research', [
      'qfzdqzdqzd',
      'qzdgerdzq',
      'qzdqzdzqd'
    ]),
    new Column('Todo', [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep'
    ]),
    new Column('Done', [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ])
  ]);


  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
