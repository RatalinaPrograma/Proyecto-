import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarPacientesPageRoutingModule } from './modificar-pacientes-routing.module';

import { ModificarPacientesPage } from './modificar-pacientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarPacientesPageRoutingModule
  ],
  declarations: [ModificarPacientesPage]
})
export class ModificarPacientesPageModule {}
