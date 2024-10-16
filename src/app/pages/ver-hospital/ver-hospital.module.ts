import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerHospitalPageRoutingModule } from './ver-hospital-routing.module';

import { VerHospitalPage } from './ver-hospital.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerHospitalPageRoutingModule
  ],
  declarations: [VerHospitalPage]
})
export class VerHospitalPageModule {}
