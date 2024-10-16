import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegCausaEmergenciaPage } from './reg-causaemergencia.page';

const routes: Routes = [
  {
    path: '',
    component: RegCausaEmergenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegCausaemergenciaPageRoutingModule {}
