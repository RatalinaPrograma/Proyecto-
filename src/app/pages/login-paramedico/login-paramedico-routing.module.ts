import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginParamedicoPage } from './login-paramedico.page';

const routes: Routes = [
  {
    path: '',
    component: LoginParamedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginParamedicoPageRoutingModule {}
