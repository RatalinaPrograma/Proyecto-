import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelHospitalPage } from './sel-hospital.page';

const routes: Routes = [
  {
    path: '',
    component: SelHospitalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelHospitalPageRoutingModule {}
