import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-configuracion-unidad',
  templateUrl: './configuracion-unidad.page.html',
  styleUrls: ['./configuracion-unidad.page.scss'],
})
export class ConfiguracionUnidadPage {
  disponibleParaCasos: boolean = false;

  constructor(private alertController: AlertController) {}

}
