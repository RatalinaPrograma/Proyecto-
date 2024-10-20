import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarSignosVitalesComponent } from './agregar-signos-vitales.component';
import { AgregarSignosVitalesRoutingModule } from './agregar-signos-vitales-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarSignosVitalesRoutingModule
  ],
  declarations: [AgregarSignosVitalesComponent]
})
export class AgregarSignosVitalesModule {}
