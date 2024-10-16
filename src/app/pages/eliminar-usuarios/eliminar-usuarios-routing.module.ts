import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminarUsuariosPage } from './eliminar-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: EliminarUsuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminarUsuariosPageRoutingModule {}
