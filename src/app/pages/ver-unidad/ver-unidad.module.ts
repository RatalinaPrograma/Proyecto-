import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerUnidadPageRoutingModule } from './ver-unidad-routing.module';

import { VerUnidadPage } from './ver-unidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerUnidadPageRoutingModule
  ],
  declarations: [VerUnidadPage]
})
export class VerUnidadPageModule {}
