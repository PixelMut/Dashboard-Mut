import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DefaultModule} from './layouts/default/default.module';
import { TaskViewComponent } from './modules/task-manager/task-view/task-view.component';
import {WebReqInterceptor} from './shared/services/web-req.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: WebReqInterceptor, multi: true } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
