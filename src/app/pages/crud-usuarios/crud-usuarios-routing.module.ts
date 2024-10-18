import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudUsuariosPage } from './crud-usuarios.page';  // Importación correcta

const routes: Routes = [
  {
    path: '',
    component: CrudUsuariosPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudUsuariosPageRoutingModule {}
