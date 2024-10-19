import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarPersonasPage } from './agregar-personas.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarPersonasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarPersonasPageRoutingModule {}
