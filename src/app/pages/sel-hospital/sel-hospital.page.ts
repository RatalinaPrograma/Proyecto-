import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sel-hospital',
  templateUrl: './sel-hospital.page.html',
  styleUrls: ['./sel-hospital.page.scss'],
})
export class SelHospitalPage implements OnInit {

  selectedHospital: string | null = null;
  error: boolean = false;

  constructor(private navCtrl: NavController, private alertController: AlertController) {}

  ngOnInit() {}

  async aplicar() {
    if (!this.selectedHospital) {
      this.error = true;
    } else {
      this.error = false;
      
      // Mostrar una alerta antes de navegar
      const alert = await this.alertController.create({
        header: 'Confirmación',
        message: 'Hospital seleccionado: ' + this.selectedHospital,
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.navCtrl.navigateRoot('/envio-info');
            }
          }
        ]
      });

      await alert.present();
    }
  }
}
