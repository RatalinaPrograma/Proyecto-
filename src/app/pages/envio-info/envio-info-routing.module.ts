import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnvioInfoPage } from './envio-info.page'; // Importa EnvioInfoPage

const routes: Routes = [
  {
    path: '',
    component: EnvioInfoPage // Asegúrate de que el componente sea EnvioInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnvioInfoPageRoutingModule {}
