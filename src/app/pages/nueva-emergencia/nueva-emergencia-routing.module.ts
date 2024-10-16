import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaEmergenciaPage } from './nueva-emergencia.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaEmergenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaEmergenciaPageRoutingModule {}
