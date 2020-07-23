import { Component, OnInit } from '@angular/core';
import {GlobalDataSummary} from '../../models/global-data';
import {Covid19DataService} from '../../shared/services/covid19-data.service';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.scss']
})
export class Covid19Component implements OnInit {
  totalActive = 0;
  totalConfirmed = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  showedDataType = 'Confirmed';

  loading = true;
  globalData: GlobalDataSummary[];
  datatable = [];
  chart = {
    PieChart : 'PieChart',
    ColumnChart : 'ColumnChart',
    LineChart : 'LineChart',
    height : 300,
    options : {
      animation : {
        duration : 1000,
        easing : 'out'
      },
      is3D : false
    }
  };

  width = document.documentElement.clientWidth;
  height = document.documentElement.clientHeight;

  constructor(private dataSrv: Covid19DataService) { }

  ngOnInit(): void {
    this.dataSrv.getGlobalData()
      .subscribe(
        {
          next : (result) => {
            this.globalData = result;
            result.forEach((cs: GlobalDataSummary) => {
              if(!Number.isNaN(cs.confirmed)){
                this.totalConfirmed += cs.confirmed;
                this.totalActive += cs.active;
                this.totalDeaths += cs.deaths;
                this.totalRecovered += cs.recovered;
              }
            });
            this.initChart('c');
          },
          complete : () => {
            this.loading = false;
          }
        }
      );
  }

  resetWindowSize(event): void{
    //Reset the width and height based on current window size
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
    if(this.showedDataType === 'Confirmed'){
      this.initChart('c');
    }else if(this.showedDataType === 'Active'){
      this.initChart('a');
    }else if(this.showedDataType === 'Recovered'){
      this.initChart('r');
    }else if(this.showedDataType === 'Deaths'){
      this.initChart('d');
    }
  }

  updateChart(caseType: string): void{
    this.initChart(caseType);
  }


  initChart(caseType: string): void{

    this.datatable = [];

    this.globalData.forEach(cs => {
      let value: number;
      if(caseType === 'c' && cs.confirmed > 300000 && !undefined){
        value = cs.confirmed;
        this.showedDataType = 'Confirmed';
      }
      if(caseType === 'a' && cs.active > 200000 && !undefined){
        value = cs.active;
        this.showedDataType = 'Active';
      }
      if(caseType === 'r' && cs.recovered > 300000 && !undefined){
        value = cs.recovered;
        this.showedDataType = 'Recovered';
      }
      if(caseType === 'd' && cs.deaths > 10000 && !undefined){
        value = cs.deaths;
        this.showedDataType = 'Deaths';
      }

      if (value){
        this.datatable.push([cs.country, value]);
      }
    });
    console.log(this.datatable);

  }

}
