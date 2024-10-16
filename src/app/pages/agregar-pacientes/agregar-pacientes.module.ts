import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarPacientesPageRoutingModule } from './agregar-pacientes-routing.module';

import { AgregarPacientesPage } from './agregar-pacientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarPacientesPageRoutingModule
  ],
  declarations: [AgregarPacientesPage]
})
export class AgregarPacientesPageModule {}
