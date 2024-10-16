import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarUnidadPageRoutingModule } from './modificar-unidad-routing.module';

import { ModificarUnidadPage } from './modificar-unidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarUnidadPageRoutingModule
  ],
  declarations: [ModificarUnidadPage]
})
export class ModificarUnidadPageModule {}
