import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getBigChartData(): any[] {
      return [
        {name : 'Asia', data : [502, 635, 809, 947, 1402, 3340, 5234]},
        {name : 'Africa', data : [106, 107, 111, 133, 221, 767, 1766]},
        {name : 'Europe', data : [163, 203, 276, 408, 547, 729, 628]},
        {name : 'America', data : [18, 31, 54, 156, 309, 818, 1201]},
        {name : 'Oceania', data : [2, 2, 2, 6, 13, 30, 46]},
      ];
  }

  getCardData(idCard: number): any[]{
    let values = [];
    switch (idCard) {
      case 1 : {
        values = [34, 56, 74, 78];
        break;
      }
      case 2 : {
        values = [64, 67, 61, 80];
        break;
      }
      case 3 : {
        values = [12, 45, 34, 42];
        break;
      }
      case 4 : {
        values = [29, 45, 67, 78];
        break;
      }
      default : {
        values = [0, 0, 0, 0];
        break;
      }
    }

    return values;
  }

  getPieChartData(): any[]{
    return [{
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'Internet Explorer',
      y: 11.84
    }, {
      name: 'Firefox',
      y: 10.85
    }, {
      name: 'Edge',
      y: 4.67
    }, {
      name: 'Safari',
      y: 4.18
    }, {
      name: 'Sogou Explorer',
      y: 1.64
    }, {
      name: 'Opera',
      y: 1.6
    }, {
      name: 'QQ',
      y: 1.2
    }, {
      name: 'Other',
      y: 2.61
    }];
  }

  getTableData(): any[]{
    return [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ]
  }
}


