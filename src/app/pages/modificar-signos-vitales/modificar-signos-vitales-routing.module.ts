import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModificarSignosVitalesComponent } from './modificar-signos-vitales.component';


const routes: Routes = [
  {
    path: '',
    component: ModificarSignosVitalesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarSignosVitalesRoutingModule {}
