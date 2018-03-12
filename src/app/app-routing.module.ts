import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
  {path:'profile', loadChildren: './profile/profile.module#ProfileModule'},
  {path:'product', loadChildren: './product/product.module#ProductModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
