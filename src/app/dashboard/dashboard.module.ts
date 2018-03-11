import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AngularMaterialModule } from  '../angular-material/angular-material.module'
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { DashboardService } from './dashboard.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    AngularMaterialModule,
    RouterModule,
    HttpClientModule
  ],
  providers:[DashboardService, HttpClientModule],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
