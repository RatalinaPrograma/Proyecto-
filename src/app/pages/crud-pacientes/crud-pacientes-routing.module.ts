import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudPacientesPage } from './crud-pacientes.page';

const routes: Routes = [
  {
    path: '',
    component: CrudPacientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudPacientesPageRoutingModule {}
