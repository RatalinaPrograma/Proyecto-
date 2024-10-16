import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarHospitalPageRoutingModule } from './eliminar-hospital-routing.module';

import { EliminarHospitalPage } from './eliminar-hospital.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarHospitalPageRoutingModule
  ],
  declarations: [EliminarHospitalPage]
})
export class EliminarHospitalPageModule {}
