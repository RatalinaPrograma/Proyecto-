import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvNivelurgenciaPage } from './ev-nivelurgencia.page';

const routes: Routes = [
  {
    path: '',
    component: EvNivelurgenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvNivelurgenciaPageRoutingModule {}
