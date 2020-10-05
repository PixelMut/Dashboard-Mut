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
  Text3 = '';

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
        this.Text1 = 'In this page, I used different charts from HighCharts library, to illustrate complex data. Highcharts provides Graphs that can be easily exploited and understood';
        this.Text2 = 'You can open in full width, print the chart, export as PNG, JPEG, PDF or even SVG file';
        this.Text3 = 'The Charts are dynamic and can use filters';
        //statements;
        break;
      }
      case 'budget': {
        this.title = 'Budget Management - Data and property binding, Real time calculation';
        this.subtitle = 'Bulma CSS - Angular Materials - Modals';
        this.Text1 = 'For this project, I used principal Angular functionalities as Data and Property Binding, Services, Subscriptions, Inputs, Outputs.. ';
        this.Text2 = 'In addition, to add more object, I used the Angular Material library, to generate modals, with data transfer';
        this.Text3 = 'The CSS is made with Bulma CSS, for a smooth and ergonomic aspect';
        break;
      }
      case 'covid': {
        this.title = 'Covid 19 Tracker - JSON Data integration and Dynamic Graphics';
        this.subtitle = 'HTTP Requests - JSON Files - Lists - Google Graphs';
        this.Text1 = 'This project, really related to nowadays crisis, uses the data feed of a JSON File, parsing it and subscribing to it.';
        this.Text2 = 'The graphics are made with Google Chart library, and can be dynamically changed, by choosing any element of the lists';
        this.Text3 = 'Http requests to github repository are converting the data into an array. And the result list is displayed using graphs and tables';
        break;
      }
      case 'kanban': {
        this.title = 'Kanban - Organization and Repartition';
        this.subtitle = 'Drag & Drop - Bulma CSS';
        this.Text1 = 'This KANBAN Project uses the drag & drop library of Angular Materials';
        this.Text2 = 'Datas are static, but can be moved from a category to another';
        this.Text3 = 'The CSS is made with Bulma CSS, for a smooth and ergonomic aspect';
        break;
      }
      case 'tm': {
        this.title = 'Task Manager - Create, modify and delete tasks';
        this.subtitle = 'HTTP Requests - Lists - DataBinding - Bulma CSS';
        this.Text1 = 'The Task Manager Project is a gathering of all kind of http requests, converted into dynamically displayed lists';
        this.Text2 = 'In addition, to add more object, I used the Angular Material library, to generate modals, with data transfer';
        this.Text3 = 'The CSS is made with Bulma CSS, for a smooth and ergonomic aspect';
        break;
      }
      case 'tictactoe': {
        this.title = 'Tic Tac Toe - Repartition and Partitioning';
        this.subtitle = 'Multi component Inputs & Outputs - Bulma CSS';
        this.Text1 = 'In this project, I used the nested components of Angular';
        this.Text2 = 'The Input / Output communication provides an easy way to program. Only creating once the required component';
        this.Text3 = 'Have fun in this one, not assisted by any AI.... yet';
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
