import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AngularMaterialModule } from  '../angular-material/angular-material.module'
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { ProfileRoutingModule } from './profile-routing.module';
import { ViewComponent } from './view/view.component';


@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    AngularMaterialModule
  ],
  declarations: [ViewComponent],
  entryComponents: [],
})
export class ProfileModule { }
