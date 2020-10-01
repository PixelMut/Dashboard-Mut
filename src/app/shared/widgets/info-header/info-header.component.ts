import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-info-header',
  templateUrl: './info-header.component.html',
  styleUrls: ['./info-header.component.scss']
})
export class InfoHeaderComponent implements OnInit {
  @Output() toggleTarget: EventEmitter<any> = new EventEmitter<any>();
  @Input() dataToShow = '';
  title = '';
  subtitle = '';
  Text1 = '';
  Text2 = '';

  constructor() { }

  ngOnInit(): void {
    this.showText(this.dataToShow);
    // console.log(this.dataToShow);
  }

  scrollToElement(): void {
    this.toggleTarget.emit();
    //console.log($element);
    //$element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

  showText(elt):void{
    switch(elt) {
      case 'dashboard': {
        this.title = 'Dashboard - Graphics and Statistics';
        this.subtitle = 'FxLayout - Widgets - HighCharts';
        this.Text1 = 'In this page, I used different charts from HighCharts library, to illustrate complex data.' +
        'Highcharts provides Graphs that can be easily exploited and understood \r\n' +
           '        You can open in full width, print the chart, export as PNG, JPEG, PDF or even SVG file'
        //statements;
        break;
      }
      case 'budget': {
        this.title = 'Budget Management - Data and property binding, Real time calculation';
        this.subtitle = 'Bulma CSS - Angular Materials - Modals';
        break;
      }
      case 'covid': {
        this.title = 'Covid 19 Tracker - JSON Data integration and Dynamic Graphics';
        this.subtitle = 'HTTP Requests - JSON Files - Lists - Google Graphs';
        break;
      }
      case 'kanban': {
        this.title = 'Kanban - Organization and Repartition';
        this.subtitle = 'Drag & Drop - Bulma CSS';
        break;
      }
      case 'tm': {
        this.title = 'Task Manager - Create, modify and delete tasks';
        this.subtitle = 'HTTP Requests - Lists - DataBinding - Bulma CSS';
        break;
      }
      case 'tictactoe': {
        this.title = 'Tic Tac Toe - Repartition and Partitioning';
        this.subtitle = 'Multi component Inputs & Outputs - Bulma CSS';
        break;
      }
      default: {
        //statements;
        this.title = 'Houston';
        this.subtitle = 'We got a problem';
        break;
      }
    }


  }

}
