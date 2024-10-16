import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudHospitalPage } from './crud-hospital.page';

const routes: Routes = [
  {
    path: '',
    component: CrudHospitalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudHospitalPageRoutingModule {}
