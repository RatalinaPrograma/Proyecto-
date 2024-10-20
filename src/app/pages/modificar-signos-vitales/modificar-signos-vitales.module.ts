import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ModificarSignosVitalesRoutingModule } from './modificar-signos-vitales-routing.module';
import { ModificarSignosVitalesComponent } from './modificar-signos-vitales.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarSignosVitalesRoutingModule
  ],
  declarations: [ModificarSignosVitalesComponent]
})
export class ModificarSignosVitalesModule {}
