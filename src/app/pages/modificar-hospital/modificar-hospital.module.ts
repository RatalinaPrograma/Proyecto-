import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarHospitalPageRoutingModule } from './modificar-hospital-routing.module';

import { ModificarHospitalPage } from './modificar-hospital.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarHospitalPageRoutingModule
  ],
  declarations: [ModificarHospitalPage]
})
export class ModificarHospitalPageModule {}
