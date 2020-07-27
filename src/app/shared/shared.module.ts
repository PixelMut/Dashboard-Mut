import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
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
import {CovidByCountryComponent} from '../modules/covid19/covid-by-country/covid-by-country.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {NgxPaginationModule} from 'ngx-pagination';
import {AuthService} from './services/auth.service';
import {WebRequestService} from './services/web-request.service';
import {LoginComponent} from '../modules/login/login.component';
import {TaskViewComponent} from '../modules/task-manager/task-view/task-view.component';
import {BudgetItemCardComponent} from '../modules/budget/budget-item-list/budget-item-card/budget-item-card.component';
import {EditItemModalComponent} from '../modules/budget/edit-item-modal/edit-item-modal.component';
import {AddItemFormComponent} from '../modules/budget/add-item-form/add-item-form.component';
import {BudgetItemListComponent} from '../modules/budget/budget-item-list/budget-item-list.component';
import {BudgetMainPageComponent} from '../modules/budget/budget-main-page/budget-main-page.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {KbMainViewComponent} from '../modules/kanban/kb-main-view/kb-main-view.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {AuthGuard} from './services/auth.guard';



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
    CovidGlobalCardComponent,
    CovidByCountryComponent,
    LoginComponent,
    TaskViewComponent,
    BudgetMainPageComponent,
    AddItemFormComponent,
    BudgetItemListComponent,
    BudgetItemCardComponent,
    EditItemModalComponent,
    KbMainViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
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
    MatPaginatorModule,
    MatDialogModule,
    HttpClientModule,
    GoogleChartsModule,
    NgxPaginationModule,
    DragDropModule
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
    CovidGlobalCardComponent,
    CovidByCountryComponent,
    LoginComponent,
    TaskViewComponent,
    BudgetMainPageComponent,
    AddItemFormComponent,
    BudgetItemListComponent,
    BudgetItemCardComponent,
    EditItemModalComponent,
    KbMainViewComponent
  ],
  providers: [DashboardService, Covid19DataService, AuthService, WebRequestService, AuthGuard, DatePipe]
})
export class SharedModule { }
