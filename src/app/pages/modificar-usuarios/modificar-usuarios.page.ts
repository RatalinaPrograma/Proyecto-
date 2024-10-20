import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertasService } from '../services/alertas.service';
import { CamaraService } from '../services/camara.service';
import { ServiciobdService } from '../services/serviciobd.service';
@Component({
  selector: 'app-modificar-usuarios',
  templateUrl: './modificar-usuarios.page.html',
  styleUrls: ['./modificar-usuarios.page.scss'],
})
export class ModificarUsuariosPage implements OnInit {
  persona = {
    idPersona: 0, // Será asignado dinámicamente
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
    private camaraService: CamaraService,
    private router: Router,
    private route: ActivatedRoute // Para obtener el ID de la URL
  ) {}

    ngOnInit() {
    this.cargarIDDesdeURL();
  }

    // Obtener el ID de la persona desde la URL
    cargarIDDesdeURL() {
      const id = this.route.snapshot.paramMap.get('id'); // Obtener el ID desde la URL
      if (id) {
        this.persona.idPersona = parseInt(id, 10); // Convertir ID a número
        this.cargarDatosUsuario(); // Cargar los datos del usuario
      } else {
        this.alertasService.presentAlert('Error', 'No se proporcionó un ID válido.');
      }
    }
  
    // Cargar datos del usuario desde la base de datos
    async cargarDatosUsuario() {
      try {
        const usuario = await this.serviciobd.obtenerUsuario(this.persona.idPersona);
        if (usuario) {
          this.persona = usuario;
          if (usuario.foto) {
            this.fotoPerfil = await this.convertirBlobABase64(usuario.foto);
          }
        } else {
          await this.alertasService.presentAlert('Error', 'Usuario no encontrado.');
        }
      } catch (error) {
        console.error('Error al cargar datos:', error);
        await this.alertasService.presentAlert('Error', 'No se pudieron cargar los datos del usuario.');
      }
    }
  
    // Convertir Blob a Base64 para mostrar la imagen
    private async convertirBlobABase64(blob: Blob): Promise<string> {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
      });
    }
  
    // Capturar foto con la cámara
    async capturarFoto() {
      try {
        const foto = await this.camaraService.tomarFoto();
        if (foto) {
          this.fotoPerfil = foto; // Mostrar la foto en la vista
          this.persona.foto = this.convertirBase64ABlob(foto); // Guardar la foto como Blob
        }
      } catch (error) {
        console.error('Error al capturar foto:', error);
        await this.alertasService.presentAlert('Error', 'No se pudo capturar la foto.');
      }
    }
  
    // Seleccionar foto desde la galería
    async seleccionarFotoDesdeGaleria() {
      try {
        const foto = await this.camaraService.seleccionarDesdeGaleria();
        if (foto) {
          this.fotoPerfil = foto;
          this.persona.foto = this.convertirBase64ABlob(foto);
        }
      } catch (error) {
        console.error('Error al seleccionar foto:', error);
        await this.alertasService.presentAlert('Error', 'No se pudo seleccionar la foto.');
      }
    }
  
    // Convertir Base64 a Blob
    private convertirBase64ABlob(base64: string): Blob {
      const byteCharacters = atob(base64.split(',')[1]);
      const byteNumbers = Array.from(byteCharacters, (char) => char.charCodeAt(0));
      const byteArray = new Uint8Array(byteNumbers);
      return new Blob([byteArray], { type: 'image/jpeg' });
    }
  
    // Validar los datos del formulario
    validarFormulario(): string {
      if (
        !this.persona.nombres || !this.persona.apellidos || 
        !this.persona.rut || !this.persona.correo || 
        !this.persona.clave
      ) {
        return 'Todos los campos son obligatorios.';
      }
  
      const rutValido = /^[0-9]+[-][0-9kK]{1}$/.test(this.persona.rut);
      if (!rutValido) {
        return 'El RUT no tiene el formato correcto.';
      }
  
      const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.persona.correo);
      if (!correoValido) {
        return 'El correo electrónico no es válido.';
      }
  
      const contraseñaValida = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/.test(this.persona.clave);
      if (!contraseñaValida) {
        return 'La contraseña debe tener al menos 6 caracteres, con mayúsculas, minúsculas y caracteres especiales.';
      }
  
      return ''; // No hay errores
    }
  
    // Guardar cambios en la base de datos
    async guardarCambios() {
      const mensajeError = this.validarFormulario();
      if (mensajeError) {
        await this.alertasService.presentAlert('Error', mensajeError);
        return;
      }
  
      try {
        await this.serviciobd.modificarPersona(this.persona);
        await this.alertasService.presentAlert('Éxito', 'Cambios guardados correctamente.');
        this.router.navigate(['/crud-usuarios']); // Redirigir después de guardar
      } catch (error) {
        console.error('Error al guardar cambios:', error);
        await this.alertasService.presentAlert('Error', 'No se pudieron guardar los cambios.');
      }
    }
  };
  // Validación del formulario de modificación
