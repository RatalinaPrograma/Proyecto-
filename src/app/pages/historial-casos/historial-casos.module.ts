import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialCasosPageRoutingModule } from './historial-casos-routing.module';

import { HistorialCasosPage } from './historial-casos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialCasosPageRoutingModule
  ],
  declarations: [HistorialCasosPage]
})
export class HistorialCasosPageModule {}
