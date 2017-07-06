import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from "./page/dashboard/dashboard.component";
import { CustomerComponent } from "./page/customer/customer.component";
import { TankerComponent } from "./page/tanker/tanker.component";
import { FourofourComponent } from './page/fourofour/fourofour.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'tanker', component: TankerComponent },
  { path: '**', component: FourofourComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }