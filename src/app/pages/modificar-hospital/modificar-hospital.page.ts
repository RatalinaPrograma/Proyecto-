import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServiciobdService } from '../services/serviciobd.service'; // Asegúrate de importar tu servicio de base de datos

@Component({
  selector: 'app-modificar-hospital',
  templateUrl: './modificar-hospital.page.html',
  styleUrls: ['./modificar-hospital.page.scss'],
})
export class ModificarHospitalPage implements OnInit {
  public idHospital: number = 0;
  public hospital: any = {
    idHospital: 0,
    nombre: '',
    direccion: ''
  };

  constructor(
    private route: ActivatedRoute,
    private bdService: ServiciobdService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.idHospital = +this.route.snapshot.paramMap.get('id')!;
    console.log('ID del hospital recibido:', this.idHospital); // Verificación
  
    if (!isNaN(this.idHospital) && this.idHospital > 0) {
      this.cargarHospital(this.idHospital);
    } else {
      console.error('ID del hospital no válido o no proporcionado.');
      alert('ID del hospital no válido o no proporcionado.');
    }
  }
  

  async cargarHospital(idHospital: number) {
    try {
      const hospital = await this.bdService.obtenerHospital(idHospital);
      if (hospital) {
        this.hospital = hospital;
      } else {
        this.presentAlert('Error', 'Hospital no encontrado.');
      }
    } catch (error) {
      this.presentAlert('Error', `Error al cargar el hospital: ${(error as any).message}`);
    }
  }

  async modificarHospital() {
    try {
      const { idHospital, nombre, direccion } = this.hospital;
      await this.bdService.modificarHospital(idHospital, nombre, direccion);
      this.presentAlert('Éxito', 'Hospital modificado correctamente.');
    } catch (error) {
      this.presentAlert('Error', `Error al modificar el hospital: ${(error as any).message}`);
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
