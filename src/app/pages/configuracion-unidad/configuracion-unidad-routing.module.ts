import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracionUnidadPage } from './configuracion-unidad.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionUnidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracionUnidadPageRoutingModule {}
