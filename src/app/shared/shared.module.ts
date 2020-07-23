import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router';
import { AreaComponent } from './widgets/area/area.component';
import {HighchartsChartModule} from 'highcharts-angular';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';
import { TableComponent } from './widgets/table/table.component';
import {MatTableModule} from '@angular/material/table';
import {SquareComponent} from '../modules/tictactoe/square/square.component';
import {TictactoeComponent} from '../modules/tictactoe/tictactoe.component';
import {BoardComponent} from '../modules/tictactoe/board/board.component';
import {MatDialogModule} from '@angular/material/dialog';
import {HttpClientModule} from '@angular/common/http';
import {DashboardService} from './services/dashboard.service';
import {Covid19DataService} from './services/covid19-data.service';
import {CovidGlobalCardComponent} from '../modules/covid19/covid-global-card/covid-global-card.component';
import {Covid19Component} from '../modules/covid19/covid19.component';
import {GoogleChartsModule} from 'angular-google-charts';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    TableComponent,
    TictactoeComponent,
    BoardComponent,
    SquareComponent,
    Covid19Component,
    CovidGlobalCardComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    MatTableModule,
    MatDialogModule,
    HttpClientModule,
    GoogleChartsModule
  ],
  exports : [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    TableComponent,
    TictactoeComponent,
    BoardComponent,
    SquareComponent,
    Covid19Component,
    CovidGlobalCardComponent
  ],
  providers: [DashboardService, Covid19DataService]
})
export class SharedModule { }
