import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerUsuariosPageRoutingModule } from './ver-usuarios-routing.module';

import { VerUsuariosPage } from './ver-usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerUsuariosPageRoutingModule
  ],
  declarations: [VerUsuariosPage]
})
export class VerUsuariosPageModule {}
