import {Component, Input, OnInit} from '@angular/core';
import * as HighCharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  chartOptions: {};
  HighCharts = HighCharts;
  @Input() dataSerie = [];

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Historic and Estimated Worldwide Population Growth by Region'
      },
      subtitle: {
        text: 'Source: I\'m the source'
      },
      credits : {
        enabled : false
      },
      exporting : {
        enabled : true
      },
      tooltip: {
        split: true,
        valueSuffix: ' millions'
      },
      series: this.dataSerie
    };

    HC_exporting(HighCharts);


    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
