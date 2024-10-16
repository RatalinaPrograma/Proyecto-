import { Component, OnInit } from '@angular/core';
import { ServiciobdService } from '../services/serviciobd.service';
import { AlertasService } from '../services/alertas.service';

@Component({
  selector: 'app-ajustes-perfil-paramedico',
  templateUrl: './ajustes-perfil-paramedico.page.html',
  styleUrls: ['./ajustes-perfil-paramedico.page.scss'],
})
export class AjustesPerfilParamedicoPage implements OnInit {
  persona = {
    idPersona: 1,  // Por defecto el ID del usuario a editar
    nombres: '',
    apellidos: '',
    rut: '',
    correo: '',
    clave: '',
    telefono: '',
    foto: ''
  };

  constructor(
    private serviciobd: ServiciobdService, 
    private alertasService: AlertasService
  ) {
    this.cargarDatosUsuario();
  }

  ngOnInit() {}

  // Cargar los datos del usuario desde la base de datos
  cargarDatosUsuario() {
    this.serviciobd.obtenerUsuario(this.persona.idPersona).then(usuario => {
      if (usuario) {
        this.persona = usuario;  // Asigna los datos obtenidos al objeto persona
      } else {
        this.alertasService.presentAlert('Error', 'No se pudo cargar la información del usuario');
      }
    }).catch(error => {
      console.error('Error al cargar los datos del usuario', error);
      this.alertasService.presentAlert('Error', 'Error al cargar los datos del usuario');
    });
  }

  // Función para validar los datos del formulario
  validarFormulario(): string {
    // Validar campos vacíos
    if (!this.persona.nombres || !this.persona.apellidos || !this.persona.rut || !this.persona.correo || !this.persona.clave) {
      return 'Todos los campos son obligatorios.';
    }

    // Validar formato del RUT
    const rutValido = /^[0-9]+[-][0-9kK]{1}$/.test(this.persona.rut);
    if (!rutValido) {
      return 'El formato del RUT es inválido.';
    }

    // Validar formato del correo
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.persona.correo) && this.persona.correo.split('@').length === 2;
    if (!correoValido) {
      return 'El formato del correo electrónico es inválido o contiene más de un símbolo "@"';
    }

    // Validar longitud y formato de la contraseña
    const contraseñaValida = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/.test(this.persona.clave);
    if (!contraseñaValida) {
      return 'La contraseña debe tener al menos 6 caracteres, incluyendo mayúsculas, minúsculas y caracteres especiales.';
    }

    // Si todas las validaciones pasan, no retornar mensaje
    return '';
  }

  // Guardar los cambios en los datos del usuario
  guardarCambios() {
    // Validar el formulario antes de intentar guardar los cambios
    const mensajeError = this.validarFormulario();
    if (mensajeError) {
      this.alertasService.presentAlert('Error', mensajeError);
      return; // No continuar si hay errores en la validación
    }

    // Si la validación es exitosa, proceder con la actualización en la base de datos
    this.serviciobd.actualizarUsuario(this.persona).then(() => {
      this.alertasService.presentAlert('Éxito', 'Los cambios se han guardado correctamente');
    }).catch(error => {
      console.error('Error al guardar los cambios', error);
      this.alertasService.presentAlert('Error', 'No se pudieron guardar los cambios');
    });
  }
}
