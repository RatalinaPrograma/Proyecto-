import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvNivelurgenciaPageRoutingModule } from './ev-nivelurgencia-routing.module';

import { EvNivelurgenciaPage } from './ev-nivelurgencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvNivelurgenciaPageRoutingModule
  ],
  declarations: [EvNivelurgenciaPage]
})
export class EvNivelurgenciaPageModule {}
