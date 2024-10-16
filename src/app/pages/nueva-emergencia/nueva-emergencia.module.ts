import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaEmergenciaPageRoutingModule } from './nueva-emergencia-routing.module';

import { NuevaEmergenciaPage } from './nueva-emergencia.page';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
// import { SQLite, } from '@awesome-cordova-plugins/sqlite/ngx';


interface Food {
  value: string;
  viewValue: string;
}

@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaEmergenciaPageRoutingModule,
    
  ],
  declarations: [NuevaEmergenciaPage],
  // providers: [
  //   SQLite]
})
export class NuevaEmergenciaPageModule {}


