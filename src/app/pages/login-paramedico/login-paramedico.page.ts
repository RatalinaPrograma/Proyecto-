
  import { Component } from '@angular/core';
  import { AlertController } from '@ionic/angular';
  import { Router } from '@angular/router';
  import { ServiciobdService } from '../services/serviciobd.service';
import { AlertasService } from '../services/alertas.service';
import { SharedService } from '../services/shared.service';
  
  
  @Component({ selector: 'app-login-paramedico',
    templateUrl: './login-paramedico.page.html',
     styleUrls: ['./login-paramedico.page.scss'],
    })
  export class LoginParamedicoPage  {
    rut: string = '';
    password: string = '';
  
    constructor(
      private alertController: AlertController, 
      private router: Router, 
      private servicebd: ServiciobdService, 
      private alertasb: AlertasService, // Servicio de alertas para mostrar mensajes
      private shared: SharedService,
    ) {}
  
    // Método para validar los campos de login
    validarLogin(): string {
      // Validar que ambos campos no estén vacíos
      if (!this.rut || !this.password) {
        return 'Por favor ingrese su Rut y contraseña.';
      }
  
      // Validar el formato del RUT
      const rutValido = /^[0-9]+[-][0-9kK]{1}$/.test(this.rut);
      if (!rutValido) {
        return 'El formato del RUT es inválido.';
      }
  
      // Si todas las validaciones pasan, no retornar mensaje
      return '';
    }
  
    // Método para iniciar sesión
    async login() {
      // Validar el formulario antes de iniciar sesión
      const mensajeError = this.validarLogin();
      if (mensajeError) {
        this.alertasb.presentAlert('Error', mensajeError);
        return;
      }
  
      // Proceder con el login si la validación es exitosa
      const usuario = await this.servicebd.login(this.rut, this.password);
      if (usuario) {
        this.shared.setIdUsuario(usuario.idPersona);
        this.shared.setidRolUsuario(usuario.idRol);
        this.router.navigate(['/home']); // Redirige al home si el login es exitoso
      } else {
        this.alertasb.presentAlert('Error de inicio de sesión', 'Rut o contraseña incorrectos.');
      }
    }
  }
  