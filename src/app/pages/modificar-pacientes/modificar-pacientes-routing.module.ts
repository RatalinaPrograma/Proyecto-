import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarPacientesPage } from './modificar-pacientes.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarPacientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarPacientesPageRoutingModule {}
