import { Component } from '@angular/core';
import { AlertasService } from '../services/alertas.service';
import { ServiciobdService } from '../services/serviciobd.service';
@Component({
  selector: 'app-register-paramedico',
  templateUrl: './register-paramedico.page.html',
  styleUrls: ['./register-paramedico.page.scss'],
})
export class RegisterParamedicoPage {
  // Variables para almacenar los valores de los campos del formulario
  persona = {
    nombres: '',
    apellidos: '',
    rut: '',
    correo: '',
    clave: '',
    telefono: '',
    foto: '',
    idRol: 2, // Cliente por defecto
  };

  constructor(
    private serviciobd: ServiciobdService, 
    private alertasService: AlertasService // Inyecta correctamente el servicio de alertas
  ) {}

  // Función para validar el formulario
  validarFormulario(): string {
    // Validar campos vacíos
    if (!this.persona.nombres || !this.persona.apellidos || !this.persona.rut || !this.persona.correo || !this.persona.clave) {
      return 'Todos los campos son obligatorios.';
    }

    // Validar formato del RUT (puedes ajustar la expresión regular según tus necesidades)
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

  // Asegúrate de que la función esté marcada como `async`
  async onRegister() {
    // Validar el formulario antes de registrar
    const mensajeError = this.validarFormulario();
    if (mensajeError) {
      this.alertasService.presentAlert('Error en registro', mensajeError);
      return;
    }

    // Si la validación es exitosa, proceder con el registro
    const registrado = await this.serviciobd.register(this.persona);
    if (registrado) {
      this.alertasService.presentAlert('Registro exitoso', 'Usuario registrado correctamente');
    } else {
      this.alertasService.presentAlert('Error en registro', 'Hubo un error en el registro.');
    }
  }
}
