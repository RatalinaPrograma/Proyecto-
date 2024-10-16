import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ev-nivelurgencia',
  templateUrl: './ev-nivelurgencia.page.html',
  styleUrls: ['./ev-nivelurgencia.page.scss'],
})
export class EvNivelurgenciaPage implements OnInit {
  confirmacion: boolean = false; // Modelo para el checkbox de confirmación
  nivelUrgencia: string = 'media'; // Modelo para el nivel de urgencia seleccionado (opcional)

  constructor(private alertController: AlertController, private router: Router) {}

  ngOnInit() {}

  async siguiente() {
    // Verificar si la casilla de confirmación está marcada
    if (this.confirmacion) {
      // Si está marcada, continuar a la siguiente página
      this.router.navigate(['/reg-causaemergencia']);
    } else {
      // Si no está marcada, mostrar una alerta
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Debe confirmar la evaluación del nivel de urgencia seleccionado.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
