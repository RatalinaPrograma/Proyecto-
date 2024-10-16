import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerUnidadPage } from './ver-unidad.page';

const routes: Routes = [
  {
    path: '',
    component: VerUnidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerUnidadPageRoutingModule {}
