import {Component, Input, OnInit} from '@angular/core';
import * as HighCharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;
  @Input() dataSerie = [];
  HighCharts = HighCharts;
  chartOptions: {};

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area',
        backgroundColor: null,
        borderWidth: 0,
        margin: [2, 2, 2, 2],
        height: 60
      },
      xAxis: {
        labels: {
          enabled : false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      yAxis: {
        labels: {
          enabled : false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      title: {
        text: null
      },
      subtitle: {
        text: null
      },
      credits : {
        enabled : false
      },
      legend : {
        enabled : false
      },
      exporting : {
        enabled : false
      },
      tooltip: {
        split: true,
        outside : true
      },
      series: [{
        data : this.dataSerie
      }]
  };

    HC_exporting(this.HighCharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
