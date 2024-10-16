import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegDetallesmedicosPageRoutingModule } from './reg-detallesmedicos-routing.module';

import { RegDetallesMedicosPage } from './reg-detallesmedicos.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegDetallesmedicosPageRoutingModule
  ],
  declarations: [RegDetallesMedicosPage]
})
export class RegDetallesmedicosPageModule {}
