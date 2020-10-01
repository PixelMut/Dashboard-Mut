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
      'Angular 11',
      'Unity 3D - Formations',
      'Freelance opportunities'
    ]),
    new Column('Todo', [
      'Finish portfolio',
      'Tuto 15',
      'Tuto 16',
      'CV'
    ]),
    new Column('Done', [
      'Send emails',
      'Do the presentation',
      'Enjoy the summer',
      'Wear a mask'
    ])
  ]);


  constructor() { }

  ngOnInit(): void {
  }

  scrollToElement($element): void {
    // console.log($element);
    $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
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
