import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginParamedicoPageRoutingModule } from './login-paramedico-routing.module';

import { LoginParamedicoPage } from './login-paramedico.page';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginParamedicoPageRoutingModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  declarations: [LoginParamedicoPage]
})
export class LoginParamedicoPageModule {}
