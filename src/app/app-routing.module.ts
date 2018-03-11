import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', loadChildren: './dashboard/dashboard.module#DashboardModule'},
  {path:'profile', loadChildren: './profile/profile.module#ProfileModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
