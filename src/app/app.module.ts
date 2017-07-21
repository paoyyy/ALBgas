import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

//ng g /page
import { DashboardComponent } from "./page/dashboard/dashboard.component";
import { CustomerComponent } from "./page/customer/customer.component";
import { TankerComponent } from "./page/tanker/tanker.component";
import { FourofourComponent } from './page/fourofour/fourofour.component';

//ng g /component
import { NavbarComponent } from "./component/navbar/navbar.component";

//ngb
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//routing
import { AppRoutingModule } from './app.routing.module';
//database service fuck u nedb
import { DatabaseService } from './shared/database.service';


declare var jQuery: any;


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    CustomerComponent,
    TankerComponent,
    FourofourComponent,
  ],
  imports: [
    NgbModule,
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }


