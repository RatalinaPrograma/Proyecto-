import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjustesPerfilParamedicoPageRoutingModule } from './ajustes-perfil-paramedico-routing.module';

import { AjustesPerfilParamedicoPage } from './ajustes-perfil-paramedico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjustesPerfilParamedicoPageRoutingModule
  ],
  declarations: [AjustesPerfilParamedicoPage]
})
export class AjustesPerfilParamedicoPageModule {}
