import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfRecepcionPageRoutingModule } from './conf-recepcion-routing.module';

import { ConfRecepcionPage } from './conf-recepcion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfRecepcionPageRoutingModule
  ],
  declarations: [ConfRecepcionPage]
})
export class ConfRecepcionPageModule {}
