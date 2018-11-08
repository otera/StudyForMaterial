import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyDashboardComponent } from "../app/my-dashboard/my-dashboard.component";
import { FirstPageComponent } from "../app/first-page/first-page.component";
import { SecondPageComponent } from "../app/second-page/second-page.component";
import { ThirdPageComponent } from "../app/third-page/third-page.component";

const routes: Routes = [
  { path: "", component: MyDashboardComponent },
  { path: "1st", component: FirstPageComponent },
  { path: "2nd", component: SecondPageComponent },
  { path: "3rd", component: ThirdPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
