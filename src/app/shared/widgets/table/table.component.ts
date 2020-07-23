import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-widget-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  @Input() dataSource = [];
  constructor() { }


  ngOnInit(): void {
  }

}
