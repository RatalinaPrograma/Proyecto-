import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarHospitalPageRoutingModule } from './agregar-hospital-routing.module';

import { AgregarHospitalPage } from './agregar-hospital.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarHospitalPageRoutingModule
  ],
  declarations: [AgregarHospitalPage]
})
export class AgregarHospitalPageModule {}
