import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarUnidadPage } from './modificar-unidad.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarUnidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarUnidadPageRoutingModule {}
