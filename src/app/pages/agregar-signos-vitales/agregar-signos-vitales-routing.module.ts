import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarSignosVitalesComponent } from './agregar-signos-vitales.component';


const routes: Routes = [
  {
    path: '',
    component: AgregarSignosVitalesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarSignosVitalesRoutingModule {}
