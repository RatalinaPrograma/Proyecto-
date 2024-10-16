import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerHospitalPage } from './ver-hospital.page';

const routes: Routes = [
  {
    path: '',
    component: VerHospitalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerHospitalPageRoutingModule {}
