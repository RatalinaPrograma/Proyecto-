import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminarPacientesPage } from './eliminar-pacientes.page';

const routes: Routes = [
  {
    path: '',
    component: EliminarPacientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminarPacientesPageRoutingModule {}
