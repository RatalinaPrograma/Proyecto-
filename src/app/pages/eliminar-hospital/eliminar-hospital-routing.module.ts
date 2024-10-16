import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminarHospitalPage } from './eliminar-hospital.page';

const routes: Routes = [
  {
    path: '',
    component: EliminarHospitalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminarHospitalPageRoutingModule {}
