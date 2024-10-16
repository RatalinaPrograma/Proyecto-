import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-reg-causaemergencia',
  templateUrl: './reg-causaemergencia.page.html',
  styleUrls: ['./reg-causaemergencia.page.scss'],
})
export class RegCausaEmergenciaPage {
  motivo!: string;
  descripcionMotivo!: string;
  notas!: string;

  constructor(private alertController: AlertController, private navCtrl: NavController) {}

  async guardarDetalles() {
    if (!this.motivo || !this.descripcionMotivo || !this.notas) {
      const alert = await this.alertController.create({
        header: 'Campos Incompletos',
        message: 'Por favor, complete todos los campos obligatorios antes de guardar los detalles.',
        buttons: ['OK'],
      });

      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Detalles Guardados',
        message: 'Los detalles de la causa de emergencia han sido guardados exitosamente.',
        buttons: [{
          text: 'OK',
          handler: () => {
            this.navCtrl.navigateForward('/nueva-emergencia');
          }
        }],
      });

      await alert.present();
    }
  }
}

