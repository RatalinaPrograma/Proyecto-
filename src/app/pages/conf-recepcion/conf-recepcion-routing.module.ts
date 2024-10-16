import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfRecepcionPage } from './conf-recepcion.page';

const routes: Routes = [
  {
    path: '',
    component: ConfRecepcionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfRecepcionPageRoutingModule {}
