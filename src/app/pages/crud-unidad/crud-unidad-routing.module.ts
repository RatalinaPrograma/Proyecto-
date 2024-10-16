import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudUnidadPage } from './crud-unidad.page';

const routes: Routes = [
  {
    path: '',
    component: CrudUnidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudUnidadPageRoutingModule {}
