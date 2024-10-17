import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServiciobdService } from '../services/serviciobd.service'; // Asegúrate de importar tu servicio de base de datos

@Component({
  selector: 'app-modificar-pacientes',
  templateUrl: './modificar-pacientes.page.html',
  styleUrls: ['./modificar-pacientes.page.scss'],
})
export class ModificarPacientesPage implements OnInit {
  public rut: string = '';
  public paciente: any = {
    idPaciente: 0,
    nombre: '',
    f_nacimiento: '',
    idGenero: 0,
    rut: '',
    telefono_contacto: ''
  };

  constructor(private route: ActivatedRoute, private bdService: ServiciobdService, private alertController: AlertController) { }

  ngOnInit() {
    this.rut = this.route.snapshot.paramMap.get('rut') || '';
    this.cargarPaciente(this.rut);
  }

  async cargarPaciente(rut: string) {
    try {
      const paciente = await this.bdService.obtenerPaciente(rut);
      if (paciente) {
        this.paciente = paciente;
      } else {
        this.presentAlert('Error', 'Paciente no encontrado.');
      }
    } catch (error) {
      this.presentAlert('Error', `Error al cargar el paciente: ${(error as any).message}`);
    }
  }

  async modificarPaciente() {
    try {
      const { idPaciente, nombre, f_nacimiento, idGenero, rut, telefono_contacto } = this.paciente;
      await this.bdService.modificarPaciente(idPaciente, nombre, new Date(f_nacimiento), idGenero, rut, telefono_contacto);
    } catch (error) {
      this.presentAlert('Error', `Error al modificar el paciente: ${(error as any).message}`);
    }
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}