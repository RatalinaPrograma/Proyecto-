import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterParamedicoPageRoutingModule } from './register-paramedico-routing.module';

import { RegisterParamedicoPage } from './register-paramedico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterParamedicoPageRoutingModule
  ],
  declarations: [RegisterParamedicoPage]
})
export class RegisterParamedicoPageModule {}
