import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudUnidadPageRoutingModule } from './crud-unidad-routing.module';

import { CrudUnidadPage } from './crud-unidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudUnidadPageRoutingModule
  ],
  declarations: [CrudUnidadPage]
})
export class CrudUnidadPageModule {}
