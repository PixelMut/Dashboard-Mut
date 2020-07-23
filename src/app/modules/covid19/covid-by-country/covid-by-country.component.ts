import {Component, OnInit, ViewChild} from '@angular/core';
import {GlobalDataSummary} from '../../../models/global-data';
import {DateWiseData} from '../../../models/date-wise-data';
import {Covid19DataService} from '../../../shared/services/covid19-data.service';
import {merge} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-covid-by-country',
  templateUrl: './covid-by-country.component.html',
  styleUrls: ['./covid-by-country.component.scss']
})
export class CovidByCountryComponent implements OnInit {
  data: GlobalDataSummary[];
  dateWiseData;

  countries: string[] = [];
  totalConfirmed = 0;
  totalActive = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  selectedCountryData : DateWiseData[];
  loading = true;
  chart = {
    LineChart : 'LineChart',
    height : 500,
    options : {
      animation : {
        duration : 1000,
        easing : 'out'
      },
      is3D : true
    }
  };
  datatable = [];
  displayedData = [];

  options: {
    height : 500,
    animation:{
      duration: 1000,
      easing: 'out',
    },
  };
  p: number = 1;
  constructor(private covidDataSrv: Covid19DataService) { }

  ngOnInit(): void {
    // this.dataSource.paginator = this.paginator;

    merge(
      this.covidDataSrv.getDateWiseData().pipe(
        map(result => {
          this.dateWiseData = result; // tout les pays
        })
      ),
      this.covidDataSrv.getGlobalData().pipe(map(result => {
        this.data = result;
        this.data.forEach(cs => {
          this.countries.push(cs.country);
        });
      }))
    ).subscribe(
      {
        complete : () => {
          this.onSelectCountry('US');
          this.loading = false;

        }
      }
    );
  }

  onSelectCountry(country: string): void{

    this.data.forEach(cs => {
      if (cs.country === country){
        this.totalActive = cs.active;
        this.totalDeaths = cs.deaths;
        this.totalRecovered = cs.recovered;
        this.totalConfirmed = cs.confirmed;
      }
    });

    this.selectedCountryData = this.dateWiseData[country];
    this.updateChart(); // update the line chart
  }

  // updating the line chart
  updateChart(): void{
    this.datatable = [];
    this.displayedData = [];
    //this.datatable.push(['Date' , 'Cases']);
    this.selectedCountryData.forEach(cs => {
       this.datatable.push([cs.date , cs.cases]);

    });
    this.datatable = this.datatable.reverse();
  }

}
