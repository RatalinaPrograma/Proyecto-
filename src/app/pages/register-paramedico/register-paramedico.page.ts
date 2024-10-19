import { Component } from '@angular/core';
import { AlertasService } from '../services/alertas.service';
import { ServiciobdService } from '../services/serviciobd.service';

@Component({
  selector: 'app-register-paramedico',
  templateUrl: './register-paramedico.page.html',
  styleUrls: ['./register-paramedico.page.scss'],
})
export class RegisterParamedicoPage {
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
    private alertasService: AlertasService
  ) {}

  // Validación del formulario
  private validarFormulario(): string {
    if (!this.persona.nombres || !this.persona.apellidos || 
        !this.persona.rut || !this.persona.correo || !this.persona.clave) {
      return 'Todos los campos son obligatorios.';
    }

    if (!/^[0-9]+[-][0-9kK]{1}$/.test(this.persona.rut)) {
      return 'El formato del RUT es inválido.';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.persona.correo)) {
      return 'Formato de correo electrónico inválido.';
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/.test(this.persona.clave)) {
      return 'La contraseña debe tener al menos 6 caracteres, con mayúsculas, minúsculas y un carácter especial.';
    }

    return ''; // Sin errores
  }

  // Registro de usuario
  async onRegister() {
    const mensajeError = this.validarFormulario();
    if (mensajeError) {
      this.alertasService.presentAlert('Error en registro', mensajeError);
      return;
    }

    const registrado = await this.serviciobd.register(this.persona);
    const mensaje = registrado 
      ? 'Usuario registrado correctamente.' 
      : 'Hubo un error en el registro.';
    const titulo = registrado ? 'Registro exitoso' : 'Error en registro';

    this.alertasService.presentAlert(titulo, mensaje);
  }






  
}

