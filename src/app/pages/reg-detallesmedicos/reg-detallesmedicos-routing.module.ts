import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegDetallesMedicosPage } from './reg-detallesmedicos.page';

const routes: Routes = [
  {
    path: '',
    component: RegDetallesMedicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegDetallesmedicosPageRoutingModule {}
