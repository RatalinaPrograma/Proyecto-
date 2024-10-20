import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login-paramedico',
    pathMatch: 'full'
  },
  {
    path: 'nueva-emergencia',
    loadChildren: () => import('./pages/nueva-emergencia/nueva-emergencia.module').then( m => m.NuevaEmergenciaPageModule)
  },
  {
    path: 'reg-detallesmedicos',
    loadChildren: () => import('./pages/reg-detallesmedicos/reg-detallesmedicos.module').then( m => m.RegDetallesmedicosPageModule)
  },
  {
    path: 'reg-causaemergencia',
    loadChildren: () => import('./pages/reg-causaemergencia/reg-causaemergencia.module').then( m => m.RegCausaemergenciaPageModule)
  },
  {
    path: 'ev-nivelurgencia',
    loadChildren: () => import('./pages/ev-nivelurgencia/ev-nivelurgencia.module').then( m => m.EvNivelurgenciaPageModule)
  },
  {
    path: 'sel-hospital',
    loadChildren: () => import('./pages/sel-hospital/sel-hospital.module').then( m => m.SelHospitalPageModule)
  },
  {
    path: 'envio-info/:rut',
    loadChildren: () => import('./pages/envio-info/envio-info.module').then( m => m.EnvioInfoPageModule)
  },
  {
    path: 'conf-recepcion',
    loadChildren: () => import('./pages/conf-recepcion/conf-recepcion.module').then( m => m.ConfRecepcionPageModule)
  },
  {
    path: 'mapa-vivo',
    loadChildren: () =>
      import('./pages/mapa-vivo/mapa-vivo.module').then(
        (m) => m.MapaVivoPageModule
      ),
  },
  {
    path: 'historial-casos',
    loadChildren: () => import('./pages/historial-casos/historial-casos.module').then( m => m.HistorialCasosPageModule)
  },
  {
    path: 'detalles-caso-anterior',
    loadChildren: () => import('./pages/detalles-caso-anterior/detalles-caso-anterior.module').then( m => m.DetallesCasoAnteriorPageModule)
  },
  {
    path: 'ajustes-perfil-paramedico',
    loadChildren: () => import('./pages/ajustes-perfil-paramedico/ajustes-perfil-paramedico.module').then( m => m.AjustesPerfilParamedicoPageModule)
  },
  {
    path: 'configuracion-unidad',
    loadChildren: () => import('./pages/configuracion-unidad/configuracion-unidad.module').then( m => m.ConfiguracionUnidadPageModule)
  },
  {
    path: 'register-paramedico',
    loadChildren: () => import('./pages/register-paramedico/register-paramedico.module').then( m => m.RegisterParamedicoPageModule)
  },
  {
    path: 'login-paramedico',
    loadChildren: () => import('./pages/login-paramedico/login-paramedico.module').then( m => m.LoginParamedicoPageModule)
  },
  {
    path: 'olvido',
    loadChildren: () => import('./pages/olvido/olvido.module').then( m => m.OlvidoPageModule)
  },
  {
    path: 'crud-usuarios',
    loadChildren: () => import('./pages/crud-usuarios/crud-usuarios.module').then( m => m.CrudUsuariosPageModule)
  },
  {
    path: 'eliminar-usuarios',
    loadChildren: () => import('./pages/eliminar-usuarios/eliminar-usuarios.module').then( m => m.EliminarUsuariosPageModule)
  },
  {
    path: 'ver-usuarios',
    loadChildren: () => import('./pages/ver-usuarios/ver-usuarios.module').then( m => m.VerUsuariosPageModule)
  },
  {
    path: 'crud-pacientes',
    loadChildren: () => import('./pages/crud-pacientes/crud-pacientes.module').then( m => m.CrudPacientesPageModule)
  },
  {
    path: 'agregar-pacientes',
    loadChildren: () => import('./pages/agregar-pacientes/agregar-pacientes.module').then( m => m.AgregarPacientesPageModule)
  },
  {
    path: 'agregar-signos-vitales/:rut',
    loadChildren: () => import('./pages/agregar-signos-vitales/agregar-signos-vitales.module').then( m => m.AgregarSignosVitalesModule)
  },
  {
    path: 'modificar-signos-vitales/:rutPaciente',
    loadChildren: () => import('./pages/modificar-signos-vitales/modificar-signos-vitales.module').then( m => m.ModificarSignosVitalesModule)
  },
  {
    path: 'eliminar-pacientes/:rut',
    loadChildren: () => import('./pages/eliminar-pacientes/eliminar-pacientes.module').then( m => m.EliminarPacientesPageModule)
  },
  {
    path: 'ver-pacientes',
    loadChildren: () => import('./pages/ver-pacientes/ver-pacientes.module').then( m => m.VerPacientesPageModule)
  },
  {
    path: 'modificar-usuarios/:id',
    loadChildren: () => import('./pages/modificar-usuarios/modificar-usuarios.module').then( m => m.ModificarUsuariosPageModule)
  },
  {
    path: 'modificar-pacientes/:rut',
    loadChildren: () => import('./pages/modificar-pacientes/modificar-pacientes.module').then( m => m.ModificarPacientesPageModule)
  },
  {
    path: 'crud-hospital',
    loadChildren: () => import('./pages/crud-hospital/crud-hospital.module').then( m => m.CrudHospitalPageModule)
  },
  {
    path: 'agregar-hospital',
    loadChildren: () => import('./pages/agregar-hospital/agregar-hospital.module').then( m => m.AgregarHospitalPageModule)
  },
  {
    path: 'eliminar-hospital',
    loadChildren: () => import('./pages/eliminar-hospital/eliminar-hospital.module').then( m => m.EliminarHospitalPageModule)
  },
  {
    path: 'ver-hospital',
    loadChildren: () => import('./pages/ver-hospital/ver-hospital.module').then( m => m.VerHospitalPageModule)
  },
  {
    path: 'modificar-hospital/:id',
    loadChildren: () => import('./pages/modificar-hospital/modificar-hospital.module').then( m => m.ModificarHospitalPageModule)
  },
  {
    path: 'modificar-unidad',
    loadChildren: () => import('./pages/modificar-unidad/modificar-unidad.module').then( m => m.ModificarUnidadPageModule)
  },
  {
    path: 'ver-unidad',
    loadChildren: () => import('./pages/ver-unidad/ver-unidad.module').then( m => m.VerUnidadPageModule)
  },
  {
    path: 'eliminar-unidad',
    loadChildren: () => import('./pages/eliminar-unidad/eliminar-unidad.module').then( m => m.EliminarUnidadPageModule)
  },
  {
    path: 'agregar-unidad',
    loadChildren: () => import('./pages/agregar-unidad/agregar-unidad.module').then( m => m.AgregarUnidadPageModule)
  },
  {
    path: 'crud-unidad',
    loadChildren: () => import('./pages/crud-unidad/crud-unidad.module').then( m => m.CrudUnidadPageModule)
  },
  {
    path: 'agregar-personas',
    loadChildren: () => import('./pages/agregar-personas/agregar-personas.module').then( m => m.AgregarPersonasPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },




  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
