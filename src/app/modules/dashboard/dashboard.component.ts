import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../../shared/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  card1 = [];
  card2 = [];
  card3 = [];
  card4 = [];
  pieChart = [];
  tableChart = [];

  constructor(private dashboardsrv: DashboardService) { }

  ngOnInit(): void {
    this.bigChart = this.dashboardsrv.getBigChartData();
    this.card1 = this.dashboardsrv.getCardData(1);
    this.card2 = this.dashboardsrv.getCardData(2);
    this.card3 = this.dashboardsrv.getCardData(3);
    this.card4 = this.dashboardsrv.getCardData(4);
    this.pieChart = this.dashboardsrv.getPieChartData();
    this.tableChart = this.dashboardsrv.getTableData();

    // console.log(this.bigChart)
  }

}
