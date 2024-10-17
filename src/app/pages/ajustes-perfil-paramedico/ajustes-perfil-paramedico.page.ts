import { Component, OnInit } from '@angular/core';
import { ServiciobdService } from '../services/serviciobd.service';
import { AlertasService } from '../services/alertas.service';
import { CamaraService } from '../services/camara.service';

@Component({
  selector: 'app-ajustes-perfil-paramedico',
  templateUrl: './ajustes-perfil-paramedico.page.html',
  styleUrls: ['./ajustes-perfil-paramedico.page.scss'],
})
export class AjustesPerfilParamedicoPage implements OnInit {
  persona = {
    idPersona: 1,
    nombres: '',
    apellidos: '',
    rut: '',
    correo: '',
    clave: '',
    telefono: '',
    foto: null as Blob | null,
    idRol: 2,
  };

  fotoPerfil: string | null = null;

  constructor(
    private serviciobd: ServiciobdService,
    private alertasService: AlertasService,
    private camaraService: CamaraService
  ) {}

  ngOnInit() {
    this.cargarDatosUsuario();
  }

  // Cargar los datos del usuario desde la base de datos
  async cargarDatosUsuario() {
    try {
      const usuario = await this.serviciobd.obtenerUsuario(this.persona.idPersona);
      if (usuario) {
        this.persona = usuario;
        if (usuario.foto) {
          this.fotoPerfil = await this.convertirBlobABase64(usuario.foto);
        }
      }
    } catch (error) {
      console.error('Error al cargar datos:', error);
    }
  }

  // Método para convertir un Blob a una cadena Base64
  private async convertirBlobABase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  }

  async capturarFoto() {
    try {
      const foto = await this.camaraService.tomarFoto();
      if (foto) {
        this.fotoPerfil = foto;
        this.persona.foto = this.convertirBase64ABlob(foto);
      }
    } catch (error) {
      console.error('Error al capturar foto:', error);
    }
  }

  async seleccionarFotoDesdeGaleria() {
    try {
      const foto = await this.camaraService.seleccionarDesdeGaleria();
      if (foto) {
        this.fotoPerfil = foto;
        this.persona.foto = this.convertirBase64ABlob(foto);
      }
    } catch (error) {
      console.error('Error al seleccionar foto:', error);
    }
  }

  // Convertir Base64 a Blob
  private convertirBase64ABlob(base64: string): Blob {
    const byteCharacters = atob(base64.split(',')[1]);
    const byteNumbers = new Array(byteCharacters.length).fill(0).map((_, i) => byteCharacters.charCodeAt(i));
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: 'image/jpeg' });
  }

  validarFormulario(): string {
    if (
      !this.persona?.nombres || !this.persona?.apellidos || 
      !this.persona?.rut || !this.persona?.correo || 
      !this.persona?.clave
    ) {
      return 'Todos los campos son obligatorios.';
    }

    const rutValido = /^[0-9]+[-][0-9kK]{1}$/.test(this.persona.rut!);
    if (!rutValido) {
      return 'El formato del RUT es inválido.';
    }

    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.persona.correo!);
    if (!correoValido) {
      return 'El correo electrónico es inválido.';
    }

    const contraseñaValida = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/.test(this.persona.clave!);
    if (!contraseñaValida) {
      return 'La contraseña debe tener al menos 6 caracteres, incluyendo mayúsculas, minúsculas y caracteres especiales.';
    }

    return '';
  }

  async guardarCambios() {
    const mensajeError = this.validarFormulario();
    if (mensajeError) {
      this.alertasService.presentAlert('Error', mensajeError);
      return;
    }

    try {
      await this.serviciobd.actualizarUsuario(this.persona);
      this.alertasService.presentAlert('Éxito', 'Cambios guardados correctamente.');
    } catch (error) {
      console.error('Error al guardar cambios:', error);
    }
  }
}
