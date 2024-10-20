import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciobdService } from '../services/serviciobd.service';
import { AlertasService } from '../services/alertas.service';
import { SharedService } from '../services/shared.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ajustes-perfil-paramedico',
  templateUrl: './ajustes-perfil-paramedico.page.html',
  styleUrls: ['./ajustes-perfil-paramedico.page.scss'],
})
export class AjustesPerfilParamedicoPage implements OnInit {
  persona: any = {
    idPersona: 0,
    nombres: '',
    apellidos: '',
    rut: '',
    correo: '',
    telefono: '',
    foto: null,
    clave: '',
    idRol: 2,
  };

  constructor(
    private route: ActivatedRoute,
    private serviciobd: ServiciobdService,
    private alertasService: AlertasService,
    private router: Router,
    private shared: SharedService,
    private location: Location
  ) {}

  ngOnInit() {
    this.cargarDatosUsuario();
  }

  // Cargar los datos del usuario según el ID de la URL
  async cargarDatosUsuario() {
    const idPersona = this.shared.getIdUsuario();
    if (idPersona) {
      try {
        const usuario = await this.serviciobd.obtenerUsuario(idPersona);
        if (usuario) {
          this.persona = usuario; // Asignar los datos al formulario
        } else {
          await this.alertasService.presentAlert('Error', 'Usuario no encontrado.');
        }
      } catch (error) {
        console.error('Error al cargar los datos del usuario:', error);
        await this.alertasService.presentAlert('Error', 'No se pudieron cargar los datos.');
      }
    } else {
      alert('ERROR: no se encuentra id Usuario')
    }
    
  }

  // Guardar los cambios realizados en el perfil
  async guardarCambios() {
    try {
      await this.serviciobd.modificarPersona(this.persona); // Actualizar en BD
      await this.alertasService.presentAlert('Éxito', 'Perfil actualizado correctamente.');
      this.router.navigate(['/home']); // Redirigir a la página principal
    } catch (error) {
      console.error('Error al guardar los cambios:', error);
      await this.alertasService.presentAlert('Error', 'No se pudieron guardar los cambios.');
    }
  }

  goBack() {
    this.location.back();
  }
}
