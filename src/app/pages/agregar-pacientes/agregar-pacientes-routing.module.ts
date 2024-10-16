import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarPacientesPage } from './agregar-pacientes.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarPacientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarPacientesPageRoutingModule {}
