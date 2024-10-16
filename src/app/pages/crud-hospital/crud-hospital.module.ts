import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudHospitalPageRoutingModule } from './crud-hospital-routing.module';

import { CrudHospitalPage } from './crud-hospital.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudHospitalPageRoutingModule
  ],
  declarations: [CrudHospitalPage]
})
export class CrudHospitalPageModule {}
