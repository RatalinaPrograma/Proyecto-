import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarPacientesPageRoutingModule } from './eliminar-pacientes-routing.module';

import { EliminarPacientesPage } from './eliminar-pacientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarPacientesPageRoutingModule
  ],
  declarations: [EliminarPacientesPage]
})
export class EliminarPacientesPageModule {}
