import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesCasoAnteriorPage } from './detalles-caso-anterior.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesCasoAnteriorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesCasoAnteriorPageRoutingModule {}
