import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiciobdService } from '../services/serviciobd.service';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';
import { SignosVitales } from '../services/signosVitales.model';

@Component({
  selector: 'app-modificar-signos-vitales',
  templateUrl: './modificar-signos-vitales.component.html',
  styleUrls: ['./modificar-signos-vitales.component.scss'],
})
export class ModificarSignosVitalesComponent  implements OnInit {

  public signosVitales: SignosVitales = {
    freq_cardiaca: 0,
    presion_arterial: '',
    temp_corporal: 0,
    sat_oxigeno: 0,
    freq_respiratoria: 0,
    condiciones: '',
    operaciones: ''
  };

  rut: string = '';
  idSignosVitales: number = 0;
  
  constructor(
    private route: ActivatedRoute, 
    private bdService: ServiciobdService,
    private alertController: AlertController,
    private location: Location
  ) { }

  ngOnInit() {
    this.rut = this.route.snapshot.paramMap.get('rutPaciente') || '';
    this.obtenerSignosVitales();
  }

  async obtenerSignosVitales() {
    try {
      const signosVitales = await this.bdService.consultartablaSignosVitalesPorRutPaciente(this.rut);
      if (signosVitales) {
        this.idSignosVitales = signosVitales.idSigno || 0;
        this.signosVitales = signosVitales;
      } else {
        await this.presentAlert('Error', 'Usuario no encontrado.');
      }
    } catch (error) {
      console.error('Error al cargar datos:', error);
      await this.presentAlert('Error', 'No se pudieron cargar los datos de signos vitales del paciente.');
    }
  }

  async modificarSignosVitales(formulario: NgForm) {
    if (formulario.invalid) {
      this.presentAlert('Error', 'Todos los campos son obligatorios');
      return;
    }
      try {
        const { freq_cardiaca, presion_arterial, temp_corporal, sat_oxigeno, freq_respiratoria, condiciones, operaciones } = this.signosVitales;
        await this.bdService.modificarSignosVitales(this.idSignosVitales!, freq_cardiaca, presion_arterial, temp_corporal, sat_oxigeno, freq_respiratoria, condiciones, operaciones);
      } catch (error) {
        this.presentAlert('Error', `Error al modificar los signos vitales: ${(error as any).message}`);
      }
  }

  async eliminarSignosVitales() {
    if (confirm('¿Está seguro de que desea eliminar los signos vitales de este paciente?')) {
      this.bdService.eliminarSignosVitales(this.idSignosVitales, this.rut);
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
