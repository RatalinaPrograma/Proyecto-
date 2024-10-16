import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelHospitalPageRoutingModule } from './sel-hospital-routing.module';

import { SelHospitalPage } from './sel-hospital.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelHospitalPageRoutingModule
  ],
  declarations: [SelHospitalPage]
})
export class SelHospitalPageModule {}
