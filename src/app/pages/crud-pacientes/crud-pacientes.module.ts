import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudPacientesPageRoutingModule } from './crud-pacientes-routing.module';

import { CrudPacientesPage } from './crud-pacientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudPacientesPageRoutingModule
  ],
  declarations: [CrudPacientesPage]
})
export class CrudPacientesPageModule {}
