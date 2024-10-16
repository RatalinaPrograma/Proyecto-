import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionUnidadPageRoutingModule } from './configuracion-unidad-routing.module';

import { ConfiguracionUnidadPage } from './configuracion-unidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionUnidadPageRoutingModule
  ],
  declarations: [ConfiguracionUnidadPage]
})
export class ConfiguracionUnidadPageModule {}
