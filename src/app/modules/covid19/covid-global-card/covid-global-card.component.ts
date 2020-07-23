import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-covid-global-card',
  templateUrl: './covid-global-card.component.html',
  styleUrls: ['./covid-global-card.component.scss']
})
export class CovidGlobalCardComponent implements OnInit {
  @Input('totalConfirmed') totalConfirmed;
  @Input('totalDeaths') totalDeaths;
  @Input('totalActive') totalActive;
  @Input('totalRecovered') totalRecovered;

  constructor() { }

  ngOnInit(): void {
  }

}
