import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudUsuariosPageRoutingModule } from './crud-usuarios-routing.module';

import { CrudUsuariosPage } from './crud-usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudUsuariosPageRoutingModule
  ],
  declarations: [CrudUsuariosPage]
})
export class CrudUsuariosPageModule {}
