import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarUsuariosPage } from './modificar-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarUsuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarUsuariosPageRoutingModule {}
