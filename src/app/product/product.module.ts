import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ViewComponent } from './view/view.component';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  declarations: [ViewComponent]
})
export class ProductModule { }
