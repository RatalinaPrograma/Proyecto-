import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarUnidadPageRoutingModule } from './eliminar-unidad-routing.module';

import { EliminarUnidadPage } from './eliminar-unidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarUnidadPageRoutingModule
  ],
  declarations: [EliminarUnidadPage]
})
export class EliminarUnidadPageModule {}
