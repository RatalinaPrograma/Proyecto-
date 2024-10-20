import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServiciobdService } from '../services/serviciobd.service'; // Asegúrate de importar tu servicio de base de datos
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

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

  constructor(
    private route: ActivatedRoute, 
    private bdService: ServiciobdService,
    private alertController: AlertController,
    private location: Location
  ) { }

  ngOnInit() {
    this.rut = this.route.snapshot.paramMap.get('rut') || '';
    this.cargarPaciente(this.rut);
  }

  async cargarPaciente(rut: string) {
    try {
      const paciente = await this.bdService.obtenerPaciente(rut);
      if (paciente) {
        this.paciente = paciente;
        // se pone formato especial para el input date
        this.paciente.f_nacimiento = new Date(this.paciente.f_nacimiento).toISOString().split('T')[0]
      } else {
        this.presentAlert('Error', 'Paciente no encontrado.');
      }
    } catch (error) {
      this.presentAlert('Error', `Error al cargar el paciente: ${(error as any).message}`);
    }
  }

  async modificarPaciente(formulario: NgForm) {
    if (formulario.invalid) {
      this.presentAlert('Error', 'Todos los campos son obligatorios');
      return;
    }
    
    try {
      const { idPaciente, nombre, f_nacimiento, idGenero, rut, telefono_contacto } = this.paciente;
      const res = await this.bdService.modificarPaciente(idPaciente, nombre, new Date(f_nacimiento), idGenero, rut, telefono_contacto);
      if (res.code === 'OK') {
        this.location.back();
      }
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