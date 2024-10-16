import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarUsuariosPageRoutingModule } from './eliminar-usuarios-routing.module';

import { EliminarUsuariosPage } from './eliminar-usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarUsuariosPageRoutingModule
  ],
  declarations: [EliminarUsuariosPage]
})
export class EliminarUsuariosPageModule {}
