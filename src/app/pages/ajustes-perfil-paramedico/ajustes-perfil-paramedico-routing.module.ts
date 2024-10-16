import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjustesPerfilParamedicoPage } from './ajustes-perfil-paramedico.page';

const routes: Routes = [
  {
    path: '',
    component: AjustesPerfilParamedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjustesPerfilParamedicoPageRoutingModule {}
