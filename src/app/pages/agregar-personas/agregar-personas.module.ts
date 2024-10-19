import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarPersonasPageRoutingModule } from './agregar-personas-routing.module';

import { AgregarPersonasPage } from './agregar-personas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarPersonasPageRoutingModule
  ],
  declarations: [AgregarPersonasPage]
})
export class AgregarPersonasPageModule {}
