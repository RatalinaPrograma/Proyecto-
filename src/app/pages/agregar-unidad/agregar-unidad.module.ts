import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarUnidadPageRoutingModule } from './agregar-unidad-routing.module';

import { AgregarUnidadPage } from './agregar-unidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarUnidadPageRoutingModule
  ],
  declarations: [AgregarUnidadPage]
})
export class AgregarUnidadPageModule {}
