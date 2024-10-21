import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiciobdService } from '../services/serviciobd.service';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';
import { SignosVitales } from '../services/signosVitales.model';

@Component({
  selector: 'app-agregar-signos-vitales',
  templateUrl: './agregar-signos-vitales.component.html',
  styleUrls: ['./agregar-signos-vitales.component.scss'],
})
export class AgregarSignosVitalesComponent  implements OnInit {
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
  
  constructor(
    private route: ActivatedRoute, 
    private bdService: ServiciobdService,
    private alertController: AlertController,
    private location: Location
  ) { }

  ngOnInit() {
    this.rut = this.route.snapshot.paramMap.get('rut') || '';
  }

  async agregarSignosVitales(formulario: NgForm) {
    if (formulario.invalid) {
      this.presentAlert('Error', 'Todos los campos son obligatorios');
      return;
    }
    
    try {
      const { freq_cardiaca, presion_arterial, temp_corporal, sat_oxigeno, freq_respiratoria, condiciones, operaciones } = this.signosVitales;
      await this.bdService.agregarSignosV(freq_cardiaca, presion_arterial, temp_corporal, sat_oxigeno, freq_respiratoria, condiciones, operaciones, this.rut);
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
