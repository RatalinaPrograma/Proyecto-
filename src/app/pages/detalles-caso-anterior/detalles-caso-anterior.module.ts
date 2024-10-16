import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesCasoAnteriorPageRoutingModule } from './detalles-caso-anterior-routing.module';

import { DetallesCasoAnteriorPage } from './detalles-caso-anterior.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesCasoAnteriorPageRoutingModule
  ],
  declarations: [DetallesCasoAnteriorPage]
})
export class DetallesCasoAnteriorPageModule {}
