import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminarUnidadPage } from './eliminar-unidad.page';

const routes: Routes = [
  {
    path: '',
    component: EliminarUnidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminarUnidadPageRoutingModule {}
