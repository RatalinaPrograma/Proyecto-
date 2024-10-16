import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialCasosPage } from './historial-casos.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialCasosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialCasosPageRoutingModule {}
