import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Hospital } from '../services/hospital'; // Importa el modelo de clase
import { ServiciobdService } from '../services/serviciobd.service';
import { AlertasService } from '../services/alertas.service';
import { ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-crud-hospital',
  templateUrl: './crud-hospital.page.html',
  styleUrls: ['./crud-hospital.page.scss'],
})
export class CrudHospitalPage implements OnInit, OnDestroy, ViewWillEnter {
  hospitales: Hospital[] = [];
  private intervalId: any;

  constructor(
    private router: Router,
    private baseDatos: ServiciobdService,
    private alertasService: AlertasService
  ) {}

  ngOnInit() {
    this.listarHospitales();
    this.startAutoRefresh();
  }

  ngOnDestroy() {
    this.stopAutoRefresh();
  }

  ionViewWillEnter() {
    this.listarHospitales();
  }

  startAutoRefresh() {
    this.intervalId = setInterval(() => {
      this.listarHospitales();
    }, 120000); // Actualiza cada 2 minutos
  }

  stopAutoRefresh() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  listarHospitales() {
    this.baseDatos.consultarTablaHospital()
      .then((res: Hospital[]) => {
        this.hospitales = res;
        console.log(this.hospitales); // Debug
      })
      .catch((error) => {
        console.error(`ERROR ${error}`);
        alert(`ERROR ${error}`);
      });
  }

  eliminarHospital(idHospital: number) {
    if (confirm('¿Está seguro de que desea eliminar este hospital?')) {
      this.baseDatos.eliminarHospital(idHospital)
        .then(() => {
          this.listarHospitales();
          this.alertasService.presentAlert('Eliminar hospital', 'Hospital eliminado correctamente.');
        })
        .catch((error) => {
          alert(`ERROR ${error}`);
        });
    }
  }

  modificarHospital(idHospital: number) {
    this.router.navigate(['/modificar-hospital', idHospital]);
  }

  agregarHospital() {
    this.router.navigate(['/agregar-hospital']);
  }
  irACrudHospital() {
    this.router.navigate(['/home']);
  
  }

}
