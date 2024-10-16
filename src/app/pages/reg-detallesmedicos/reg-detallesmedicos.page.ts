import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-reg-detallesmedicos',
  templateUrl: './reg-detallesmedicos.page.html',
  styleUrls: ['./reg-detallesmedicos.page.scss'],
})
export class RegDetallesMedicosPage {
  frecuenciaCardiaca!: number;
  presionArterial!: string;
  temperaturaCorporal!: number;
  saturacionOxigeno!: number;
  frecuenciaRespiratoria!: number;
  condicionesPreexistentes!: string;
  operacionesAnteriores!: string;

  constructor(private alertController: AlertController, private navCtrl: NavController) {}

  async guardarRegistro() {
    // Validaciones de los campos
    if (
      !this.frecuenciaCardiaca ||
      this.frecuenciaCardiaca <= 0 || 
      this.frecuenciaCardiaca > 220
    ) {
      this.mostrarAlerta('Frecuencia Cardíaca', 'Debe ser un valor positivo menor o igual a 220 bpm.');
      return;
    }

    if (!this.presionArterial.trim()) {
      this.mostrarAlerta('Presión Arterial', 'Debe ingresar un valor para la presión arterial.');
      return;
    }

    if (
      !this.temperaturaCorporal || 
      this.temperaturaCorporal <= 0 || 
      this.temperaturaCorporal > 43
    ) {
      this.mostrarAlerta('Temperatura Corporal', 'Debe ser un valor positivo menor o igual a 43 °C.');
      return;
    }

    if (
      !this.saturacionOxigeno || 
      this.saturacionOxigeno <= 0 || 
      this.saturacionOxigeno > 100
    ) {
      this.mostrarAlerta('Saturación de Oxígeno', 'Debe ser un valor positivo menor o igual a 100%.');
      return;
    }

    if (
      !this.frecuenciaRespiratoria || 
      this.frecuenciaRespiratoria <= 0 || 
      this.frecuenciaRespiratoria > 60
    ) {
      this.mostrarAlerta('Frecuencia Respiratoria', 'Debe ser un valor positivo menor o igual a 60 rpm.');
      return;
    }

    if (!this.condicionesPreexistentes.trim()) {
      this.mostrarAlerta('Condiciones Preexistentes', 'Debe describir las condiciones preexistentes.');
      return;
    }

    if (!this.operacionesAnteriores.trim()) {
      this.mostrarAlerta('Operaciones Anteriores', 'Debe describir las operaciones anteriores.');
      return;
    }

    // Si todas las validaciones pasan, mostrar el mensaje de éxito y redirigir
    const alert = await this.alertController.create({
      header: 'Registro Guardado',
      message: 'Los detalles médicos han sido guardados exitosamente. Redirigiendo...',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.navCtrl.navigateRoot('/sel-hospital');
        }
      }],
    });

    await alert.present();
  }

  async mostrarAlerta(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
