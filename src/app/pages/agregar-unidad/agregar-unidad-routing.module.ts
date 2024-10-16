import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarUnidadPage } from './agregar-unidad.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarUnidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarUnidadPageRoutingModule {}
