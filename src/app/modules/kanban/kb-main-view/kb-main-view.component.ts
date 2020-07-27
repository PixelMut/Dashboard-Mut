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
      'Mail Ulb',
      'Envoyer Portable',
      'Cadeau mariage : jenga',
      'CV',
      'Remboursement vol lyon',
      'Photo famille ; integrer ozan',
      'Reservation simu voiture',
      'Montage video Pinot',
      'Rdv consulat truc',
      '2e rdv dentiste',
      'Voucher easyjet 12CQV6 (87€)',
      'Voucher KLM : appeler',
    ]),
    new Column('Done', [
      'Quietis écran tel num IMEI',
      'Onem U1',
      'Pole emploi : inscription',
      'Degustation de vin a domicile',
      'Transferer photos tel',
      'Imprimer papiers quietis',
      'Rdv veto',
      'Basic fit facture',
      'Brussel airlines : appeler',
      'Rdv barbier'
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
