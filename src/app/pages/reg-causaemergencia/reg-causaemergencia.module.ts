import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegCausaemergenciaPageRoutingModule } from './reg-causaemergencia-routing.module';

import { RegCausaEmergenciaPage } from './reg-causaemergencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegCausaemergenciaPageRoutingModule
  ],
  declarations: [RegCausaEmergenciaPage]
})
export class RegCausaemergenciaPageModule {}
