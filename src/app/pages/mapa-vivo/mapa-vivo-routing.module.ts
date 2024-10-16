import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaVivoPage } from './mapa-vivo.page';

const routes: Routes = [
  {
    path: '',
    component: MapaVivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaVivoPageRoutingModule {}
