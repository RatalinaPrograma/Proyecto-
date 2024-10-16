import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterParamedicoPage } from './register-paramedico.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterParamedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterParamedicoPageRoutingModule {}
