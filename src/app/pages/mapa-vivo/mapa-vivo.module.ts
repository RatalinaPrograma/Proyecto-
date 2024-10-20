import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MapaVivoPageRoutingModule } from './mapa-vivo-routing.module';
import { MapaVivoPage } from './mapa-vivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaVivoPageRoutingModule
  ],
  declarations: [MapaVivoPage]
})
export class MapaVivoPageModule {}
